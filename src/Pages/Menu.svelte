<script>
  import DividerWithText from '../Elements/DividerWithText.svelte';
  import Container from '../Elements/Container.svelte';
  import MenuItem from '../Elements/MenuItem.svelte';
  import PageHeaderImage from '../Elements/PageHeaderImage.svelte';

  import { menu } from '../static-content';
</script>

<section>
  <PageHeaderImage src="/images/header-cafe-04.jpg" alt="Cafe"/>
  <div class="bg-color">
    <DividerWithText text="Coffee & Drinks Menu" />
  </div>
  <div class="menu">
    <Container>
      <div class="row">
        <div class="column">
          <div class="row-space-between">
            <h2>Hot Drinks</h2>
            <h4>12oz / 16oz / 20oz / 24oz</h4>
          </div>
          <hr/>
          {#each menu.hotDrinks as drink}
            <MenuItem item={drink} />
          {/each}
        </div>
        <div class="column">
          <div class="row-space-between">
            <h2>Cold Drinks</h2>
            <h4>12oz / 20oz / 24oz</h4>
          </div>
          <hr/>
          {#each menu.coldDrinks as drink}
            <MenuItem item={drink} />
          {/each}
        </div>
      </div>
    </Container>
  </div>
</section>

<style>
  h2 {
    size: 2.4em;
  }

  hr {
    vertical-align: middle;
    border-bottom: 2px solid #c7a17a;
    margin: 0 0 1.5em 0;
    width: 120px;
  }

  section {
    background-color: #151412;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    align-content: center;
  }

  .bg-color {
    background-color: var(--primary-background-color);
    padding: 1em;
  }

  .menu {
    background-color: #f2f0ea;
    min-height: 800px;
  }

  h2, h4 {
    color: var(--alternate-color);
  }

  .row {
    display: flex;
    margin: 1.5em 0 8em 0;
  }

  .row-space-between {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .column {
    flex: 50%;
    display: flex;
    flex-direction: column;
    padding: 1.2em;
    margin: 0px 32px;
  }

  @media screen and (max-width: 600px) {
    .column {
      width: 100%;
    }
  }
</style>
