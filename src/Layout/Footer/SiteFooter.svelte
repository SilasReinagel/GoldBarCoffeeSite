<script>
  export let company;
  const year = new Date().getFullYear();
</script>

<footer>
  <span>© {year} {company}</span>

  <ul class="social-links">
    <a class="social-icon yelp-red" href="http://www.yelp.com/biz/gold-bar-espresso-tempe" target=”_blank”>
      <img src="/images/yelp.svg"/>
    </a>
    <a class="social-icon facebook-blue" href="http://www.facebook.com/pages/Gold-Bar-Espresso/46920370784" target=”_blank”>
      <img src="/images/facebook.svg"/>
    </a>
    <a class="social-icon twitter-blue" href="https://twitter.com/#!/GoldBarEspresso" target=”_blank”>
      <img src="/images/twitter.svg"/>
    </a>
  </ul>

  <span class="small-text">Website by: <a href="http://www.silasreinagel.com">Silas Reinagel</a></span>
</footer>

<style>
  footer {
    padding: 12px 18px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    background-color: rgba(21, 20, 18, 1);
    font-size: 0.8em;
  }

  .small-text {
    font-size: 0.7em;
  }

  .social-links {
    list-style: none;
    display: flex;
    flex-direction: row;
  }

  .social-icon {
    margin: 0 1em;
  }

  .social-icon img {
    filter: invert(.5) brightness(3);
    width: 20px;
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
