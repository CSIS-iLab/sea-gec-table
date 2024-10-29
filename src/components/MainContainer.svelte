<script>
  import Header from "./Header.svelte"
  import IntroContent from "./IntroContent.svelte"
  import Options from "./Options.svelte"
  import Table from "./Table.svelte"
  import About from "./About.svelte"
  import Footer from "./Footer.svelte"

  export let dataset
  let selectedSector = ""
  let selectedInvestmentAuthority = ""
  let selectedMonth = ""
  let searchText
  let selectedYear = ""
  $: row = { isOpen: false }

  $: filteredData = () => {
    console.log(dataset.data)
    return dataset.data
      .filter((row) => {
        const rowYear = row.date
        const matchesYear = selectedYear ? rowYear === selectedYear : true
        const matchesMonth = selectedMonth ? rowMonth === selectedMonth : true
        const isSelectedSector = selectedSector
          ? row.sector === selectedSector
          : true
        const isSelectedInvestmentAuthority = selectedInvestmentAuthority ? row.investmentAuthority === selectedInvestmentAuthority : true

        const filteredTableItem = searchText
          ? searchText.toLowerCase().trim()
          : ""
        const matchesText = (text) =>
          text.toLowerCase().includes(filteredTableItem)

        const matchesAnyCondition = [
          matchesText(row.tableItem.title),
          matchesText(row.sector),
          matchesText(row.investmentAuthority),
        ].some(Boolean)

        return (
          matchesYear &&
          matchesMonth &&
          matchesAnyCondition &&
          isSelectedSector &&
          isSelectedInvestmentAuthority
        )
      })
      .sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0))
  }
</script>

<div id="site-content">
  <Header />

  <IntroContent />

  <section class="table-container">
    <Options
      {dataset}
      filteredData={filteredData()}
      bind:row
      bind:selectedInvestmentAuthority
      bind:selectedSector
      bind:searchText
      bind:selectedMonth
      bind:selectedYear
    />

    <Table filteredData={filteredData()} bind:row />
  </section>
  <About />
  <Footer />
</div>

<style lang="scss">
  @use "../scss/components/table-container";
</style>
