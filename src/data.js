import * as d3Fetch from "d3-fetch"

const URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vShsC7eSCDCilSURnYXiw0zvQYc8GiJZClBn2YK8Bz8uDp7TxsrzIquS5L5eModVRd5MoO9zlernqP1/pub?gid=0&single=true&output=csv"

export default function getData() {
  const dataPromise = d3Fetch.csv(URL).then((res) => {
    console.log(res)

    const data = res.map((row, index) => {
      return {
        id: index,
        tableItem: {
          title: row.title,
          quote: row.description,
          sources: [
            [row.source_1, row.source_name_1],
          ],
          image_url: row.image_url,
          image_source: row.image_source,
        },
        category: row.sector,
        category_name: row.sector,
        type: row.sector,
        date_string: row.date,
        date: "",
      }
    })

    const type = formatType(data)

    const categories = formatCategories(data)

    const dates = createAndAssignDateObjects(data)

    const years = createYearList(data)

    return {
      data: data,
      categories: categories,
      dates: dates,
      type: type,
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

function formatType(array) {
  return [...new Set(array.map((el) => el.type))]
}

function formatCategories(array) {
  return [...new Set(array.map((el) => el.category))]
}
