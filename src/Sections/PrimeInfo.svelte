<script>
  export let company;
  export let phone;

  import DividerWithText from '../Elements/DividerWithText.svelte';
  import Container from '../Elements/Container.svelte';
  import Hours from './Hours.svelte';
  import CafeBrandStatement from './CafeBrandStatement.svelte';
</script>

<section id="prime-info">
  <DividerWithText text={company} />
  <Container>
    <div class="mobile-three-column-layout">
      <div class="column">
        <CafeBrandStatement/>
      </div>
      <div class="column">
        <div class="img-box">
          <img src="/images/live-jazz-01.jpg" alt="Live jazz music" loading="lazy"/>
        </div>
        <h4>Live Music Every Weekend!</h4>
        <p>Straight ahead, acoustic, the sounds of Miles, Coltrane, Monk, and so many more. Friday and Sunday nights begining at 7:30 PM.</p>
        <p>The hot sounds of guitar, bass, sax and vibraphone fill the night on the weekends at Gold Bar Espresso. Jazz Alliance is here to stay!</p>
        <p>Need a little head space? Sunday mornings finds Scott Anderson and classical guitar.
          Just the ticket for meditative thoughts, writing, or chilling out! Join Scott from 9-11 AM.</p>
      </div>
      <div class="column"><Hours phone={phone}/></div>
    </div>
  </Container>
</section>

<style>
  h4 {
    font-size: 1.4em;
  }

  .img-box {
    border: 2px #fff solid;
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

  .column {
    max-width: 80vw;
    width: 440px;
    margin: 1em;
  }

</style>
