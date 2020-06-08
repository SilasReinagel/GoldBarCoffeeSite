<script>
  export let company;

  import DividerWithText from '../Elements/DividerWithText.svelte';
  import Container from '../Elements/Container.svelte';
</script>

<section id='prime-info'>
  <DividerWithText text={company} />
  <Container>
    <div class="mobile-three-column-layout">
      <div class="column">
        <div class="img-box">
          <img src="/images/people-in-cafe-01.jpg" alt="Happy customer at Gold Bar cash register" />
        </div>
        <h4>Rest, Relax & Revive!</h4>
        <p>At Gold Bar Espresso people from all around come to rest, relax, and revive with great coffee, great company, and great food!</p>
        <div class="icon-box"><img src="/icons/free-wifi.png" alt="Free Wifi"/></div>
      </div>
      <div class="placeholder"></div>
      <div class="placeholder"></div>
    </div>
  </Container>
</section>

<style>
  h4 {
    font-size: 1.4em;
  }

  img {
    width: 100%;
    height: auto;
  }

  .img-box {
    border: 4px #fff solid;
  }

  .icon-box {
    width: 128px;
    height: 128px;
    margin: 32px auto 12px auto;
  }

  section {
    padding: 16px;
    background-color: #151412;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    align-content: center;
  }

  .mobile-three-column-layout {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .placeholder {
    max-width: 600px;
    width: 440px;
    height: 440px;
    background-color: magenta;
    margin: 1em;
  }

  .column {
    max-width: 440px;
    margin: 1em;
  }

</style>
