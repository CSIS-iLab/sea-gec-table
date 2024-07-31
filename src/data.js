import * as d3Fetch from "d3-fetch"

const URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vShsC7eSCDCilSURnYXiw0zvQYc8GiJZClBn2YK8Bz8uDp7TxsrzIquS5L5eModVRd5MoO9zlernqP1/pub?gid=0&single=true&output=csv"

export default function getData() {
  const dataPromise = d3Fetch.csv(URL).then((res) => {
    const data = res.map((row, index) => {
      return {
        id: index,
        tableItem: {
          title: row.title,
          description: row.description,
          sources: [
            [row.source_1, row.source_name_1],
            [row.source_2, row.source_name_2]
          ]
        },
        sector: row.sector,
        investmentAuthority: row.investment_authority,
        amount: parseInt(row.amount),
        date_string: row.date,
        date: "",
      }
    })

    console.log("Data", data)
    const investmentAuthority = formatInvestmentAuthority(data)

    const sectors = formatSectors(data)

    const dates = createAndAssignDateObjects(data)

    const years = createYearList(data)

    return {
      data: data,
      sectors: sectors,
      dates: dates,
      investmentAuthority: investmentAuthority,
      years: years,
    }
  })
  return dataPromise
}

function createYearList(data) {
  // Create a Set to store unique years
  const uniqueYearsSet = new Set()

  // Loop through each row in the dataset
  data.forEach((row) => {
    // Extract the year from the date_string and add it to the Set
    const year = new Date(row.date_string).getFullYear()
    uniqueYearsSet.add(year)
  })

  // Convert the Set of unique years to an array and sort it
  return Array.from(uniqueYearsSet).sort((a, b) => a - b) // Numeric sort
}

function createAndAssignDateObjects(array) {
  let dates = []
  let date_string = []

  for (let i = 0; i < array.length; i++) {
    let date = array[i].date_string

    let dateObject = new Date(date)
    array[i].date = dateObject

    if (!date_string.includes(array[i].date_string)) {
      date_string.push(array[i].date_string)
      dates.push(dateObject)
    }
  }

  return dates
}

function formatInvestmentAuthority(array) {
  return [...new Set(array.map((el) => el.investmentAuthority))]
}

function formatSectors(array) {
  return [...new Set(array.map((el) => el.sector))]
}
