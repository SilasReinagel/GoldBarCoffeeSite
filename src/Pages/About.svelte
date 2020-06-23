<script>
  import TwoColumnLayout from '../Elements/TwoColumnLayout.svelte';
  import StandardPageLayout from '../Elements/StandardPageLayout.svelte';

  import company from '../static-content';
</script>

<StandardPageLayout title="About Us" headerImg="../images/live-jazz-03.jpg" headerImgAlt="About Us Banner">
  <TwoColumnLayout>
    <div class='center-vertically' slot='first'>
      <img class="logo" src={company.logo} alt="{company.name} Logo"/>
    </div>
    <div slot='second'>
      <h1>{company.name}</h1>
      <p><b>{company.name}</b> is located in Tempe, AZ, at the NE Corner of McClintock and Southern.</p>
      <p class='quote decor-font'>Choice of the Connoisseur</p>
      <p>{company.name} is a family owned and operated coffee shop which is centered around its community. Live jazz, game nights, 
        and the cozy, homey interior all provide you with the personal warmth and connection you are longing for. 
      <p>The carefully selected, high-quality coffees, teas, and specialty mochas seal the deal with beverages that satifsy even 
        the most discerning customers.</p>
      <p>Come on in and have a drink with us today...</p>

      <div class="social-links">
        <a class="social-icon yelp-red" href={company.social.yelp} target=”_blank”>
          <img src="/images/yelp.svg" alt="Yelp Icon" loading="lazy"/>
        </a>
        <a class="social-icon facebook-blue" href={company.social.facebook} target=”_blank”>
          <img src="/images/facebook.svg" alt="Facebook Icon" loading="lazy"/>
        </a>
        <a class="social-icon twitter-blue" href={company.social.twitter} target=”_blank”>
          <img src="/images/twitter.svg" alt="Twitter Icon" loading="lazy"/>
        </a>
      </div>
    </div>
  </TwoColumnLayout>
</StandardPageLayout>

<style>
  .center-vertically {
    display: flex;
    justify-content: center;
    margin-top: auto;
    margin-bottom: auto;
  }

  h1 {
    color: var(--alternate-color);
  }

  p {
    color: var(--alternate-color-light);
    font-size: 1.1em;
    line-height: 1.3em;
  }

  .logo {
    width: 360px;
    max-width: 80vw;
    height: auto;
  }

  .quote {
    border-left-color: var(--secondary-color);
    border-left-style: solid;
    border-left-width: 6px;
    padding: 1em;
    font-size: 1.4em;
    font-weight: 700;
    color: var(--alternate-color);
    margin: 1.5em 0px;
  }

  .social-links {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 4em;
  }

  .social-icon {
    margin: 0 2em 0 0;
  }

  .social-icon img {
    filter: invert(.5) saturate(1) brightness(0.8) grayscale(1);
    width: 24px;
    height: auto;
  }

  .social-icon img:hover {
    filter: invert(.5) brightness(1.8);
  }

  .twitter-blue img:hover {
    filter: brightness(0.5) sepia(1) hue-rotate(140deg) saturate(6);
  }

  .facebook-blue img:hover {
    filter: brightness(0.3) sepia(1) hue-rotate(180deg) saturate(5);
  }

  .yelp-red img:hover {
    filter: brightness(0.4) sepia(1) hue-rotate(300deg) saturate(8);
  }
</style>
