<script>
  import Icon from "./Icons.svelte";
</script>

<div class="wrapper">
  <main class="container intro-content">
    <div class="intro-content__container">
      <div class="intro-content">
        <p class="intro-content__overline--regular">
          By the Southeast Asia Program
        </p>
        <h1 class="intro-content__title">US Investments in the Philippines</h1>
        <p class="intro-content__introduction">
          A curated database of US investments in the Philippines over the last
          10 years, from the <a
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
    </div>
    <!--GRID-->
    <div class="intro-content__grid">
      <div class="intro-content__grid-item">
        <div
          class="flourish-embed flourish-chart"
          data-src="visualisation/19490897?39773"
        >
          <script
            src="https://public.flourish.studio/resources/embed.js"
          ></script><noscript
            ><img
              src="https://public.flourish.studio/visualisation/19490897/thumbnail"
              width="100%"
              alt="chart visualization"
            /></noscript
          >
        </div>
      </div>
      <div class="intro-content__grid-item">
        <h1>2024</h1>
        <h3>Biggest Year for Investment</h3>
      </div>
      <div class="intro-content__grid-item">
        <div
          class="flourish-embed flourish-chart"
          data-src="visualisation/19489806?39773"
        >
          <script
            src="https://public.flourish.studio/resources/embed.js"
          ></script><noscript
            ><img
              src="https://public.flourish.studio/visualisation/19489806/thumbnail"
              width="100%"
              alt="chart visualization"
            /></noscript
          >
        </div>
      </div>
      <div class="intro-content__grid-item">
        <h1>Renewable Energy</h1>
        <h3>Sector with Greatest Investment</h3>
      </div>
      <div class="intro-content__grid-item">
        <div
          class="flourish-embed flourish-chart"
          data-src="visualisation/19490010?39773"
        >
          <script
            src="https://public.flourish.studio/resources/embed.js"
          ></script><noscript
            ><img
              src="https://public.flourish.studio/visualisation/19490010/thumbnail"
              width="100%"
              alt="chart visualization"
            /></noscript
          >
        </div>
      </div>
      <div class="intro-content__grid-item">
        <h1>$7.5 Billion</h1>
        <h3>Single Largest Investment</h3>
      </div>
    </div>
  </main>
</div>

<style lang="scss">
  @use "../scss/components/intro-content";
</style>
