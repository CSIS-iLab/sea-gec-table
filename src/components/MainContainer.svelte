<script>
  import Header from "./Header.svelte"
  import IntroContent from "./IntroContent.svelte"
  import Options from "./Options.svelte"
  import Table from "./Table.svelte"
  import About from "./About.svelte"
  import Footer from "./Footer.svelte"

  export let dataset
  let selectedCategory = ""
  let selectedType = ""
  let searchText
  let selectedYear = ""
  $: row = { isOpen: false }

  $: filteredData = () => {
    return dataset.data
      .filter((row) => {
        const rowDate = new Date(row.date_string)
        const rowYear = rowDate.getFullYear()

        const matchesYear = selectedYear ? rowYear === selectedYear : true
        const isSelectedCategory = selectedCategory
          ? row.category === selectedCategory
          : true
        const isSelectedType = selectedType ? row.type === selectedType : true

        const filteredTableItem = searchText
          ? searchText.toLowerCase().trim()
          : ""
        const matchesText = (text) =>
          text.toLowerCase().includes(filteredTableItem)

        const matchesAnyCondition = [
          matchesText(row.tableItem.title),
          matchesText(row.category),
          matchesText(row.type),
        ].some(Boolean)

        return (
          matchesYear &&
          matchesAnyCondition &&
          isSelectedCategory &&
          isSelectedType
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
      bind:selectedType
      bind:selectedCategory
      bind:searchText
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
