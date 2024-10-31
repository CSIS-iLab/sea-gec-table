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
        <h1 class="intro-content__title">U.S. Investments in the Philippines</h1>
        <p class="intro-content__introduction">
          A curated database of U.S. investments in the Philippines over the last
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
        <!--GRID-->
        <!-- <div class="intro-content__grid">
          <div class="intro-content__grid-item">
            <iframe
              src="https://flo.uri.sh/visualisation/19490897/embed"
              title="Interactive or visual content"
              class="flourish-embed-iframe"
              frameborder="0"
              scrolling="no"
              style="width:100%;height:600px;"
              sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
            ></iframe>
          </div>
          <div class="intro-content__grid-item">
            <h1 id="biggest-investment-year">2024</h1>
            <h2>Biggest Year for Investment</h2>
          </div>
          <div class="intro-content__grid-item">
            <iframe
              src="https://flo.uri.sh/visualisation/19489806/embed"
              title="Interactive or visual content"
              class="flourish-embed-iframe"
              frameborder="0"
              scrolling="no"
              style="width:100%;height:600px;"
              sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
            ></iframe>
          </div>
          <div class="intro-content__grid-item">
            <h1>Renewable Energy</h1>
            <h2>Sector with Greatest Investment</h2>
          </div>
          <div class="intro-content__grid-item">
            <iframe
              src="https://flo.uri.sh/visualisation/19490010/embed"
              title="Interactive or visual content"
              class="flourish-embed-iframe"
              frameborder="0"
              scrolling="no"
              style="width:100%;height:600px;"
              sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
            ></iframe>
          </div>
          <div class="intro-content__grid-item">
            <h1>$7.5 Billion</h1>
            <h2>Single Largest Investment</h2>
          </div>
        </div> -->
      </div>
    </div>
  </main>
</div>

<style lang="scss">
  @use "../scss/components/intro-content";
</style>
