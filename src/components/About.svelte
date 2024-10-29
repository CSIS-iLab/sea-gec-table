<script>
  import Icon from "./Icons.svelte"
</script>

<section class="about" id="about">
  <div class="about__container">
    <h2 class="about__subtitle">About</h2>
    <div class="about__description">
      <p>
        The CSIS Southeast Asia Program is the premier forum for sustained high-level policy dialogue focusing on Southeast Asia and U.S. interests in the region. The program provides policy recommendations and support for U.S.–Southeast Asia relations and builds political, economic, and people-to-people ties between the United States and Southeast Asian countries.
      </p>
    </div>
    <div class="about__reports">
      <p class="about__reports__title">Associated Reports</p>
      <ul>
        <li>
          <a
            class="about__reports__link"
            href="https://www.csis.org/programs/southeast-asia-program"
            target="_blank"
            >U.S. Investmentin the Philippines: The Next Era of EconomicPartnership & Opportunity<span class="icon-container"
              ><Icon class="icon__report" name="Icon-open-blank" /></span
            ></a
          >
        </li>
      </ul>
    </div>
    <div class="about__development">
      <h3 class="about__development__title">Development Team</h3>
      <p class="about__development__description">
        This database is a product of the <a
          class="about__development__link"
          href="https://www.csis.org/programs/dracopoulos-ideas-lab"
          target="_blank">Andreas C. Dracopoulos iDeas Lab</a
        >, the in-house digital, multimedia, and design agency at the Center for
        Strategic and International Studies.
      </p>
      <p class="about__development__description">
        Produced by Mariel de la Garza.
        <br />
        Copyediting by Madison Bruno.
      </p>
    </div>
    <div class="back-top-container">
      <a class="back-top-container__link" href="#top"
        ><span>Back to Top</span><span
          class="back-top-container__icon-container back-top__icon-container"
        >
          <Icon class="icon__back-top" name="Icon-arrow-up" />
        </span>
      </a>
    </div>
  </div>
</section>

<style lang="scss">
  @use "../scss/components/about";
</style>
