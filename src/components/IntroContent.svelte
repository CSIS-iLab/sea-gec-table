<script>
  import Icon from "./Icons.svelte"
</script>

<div class="wrapper">
  <main class="container intro-content">
    <div class="intro-content__container">
      <div class="intro-content">
        <p class="intro-content__overline--regular">
          By the Southeast Asia Program
        </p>
        <h1 class="intro-content__title">
          US Investments in the Philippines
        </h1>
        <p class="intro-content__introduction">
          A curated database of US investments in the Philippines over the last 10 years, from the <a
            class="intro-content__link"
            href="https://www.csis.org/programs/southeast-asia-program"
            target="_blank">CSIS Southeast Asia Program</a
          >.
        </p>
        <p class="intro-content__more">
          <a class="intro-content__link intro-content__link--more" href="#about"
            ><span class="intro-content__more__icon-container">
              <Icon class="icon__info" name="Icon-info" />
            </span><span>More on this database</span></a
          >
        </p>
      </div>
      <div class="intro-content__flex-right"></div>
    </div>
  </main>
</div>

<style lang="scss">
  @use "../scss/components/intro-content";
</style>
