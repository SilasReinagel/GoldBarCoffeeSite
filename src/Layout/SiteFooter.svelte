<script>
  export let company;

  const year = new Date().getFullYear();
</script>

<footer>
  <p>© {year} {company.name}</p>

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

  <p class="small-text">Website by: <a href="http://www.silasreinagel.com" class="small-text">Silas Reinagel</a></p>
</footer>

<style>
  footer {
    padding: 12px 18px;
    height: 5em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    background-color: #000;
  }

  a {
    font-size: 1em;
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
    width: 1.2em;
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

  @media screen and (max-width: 600px) {
    .social-links {
      display: none;
    }
  }

</style>
