<script>
  import DividerWithText from '../Elements/DividerWithText.svelte';
  import Container from '../Elements/Container.svelte';
  import MenuItem from '../Elements/MenuItem.svelte';

  import { menu } from '../static-content';
</script>

<section>
  <DividerWithText text="Coffee & Drinks Menu" />
  <div class="menu">
    <Container>
      <div class="row">
        <div class="column">
          <div class="row-space-between">
            <h2>Hot Drinks</h2>
            <h4>12oz / 16oz / 20oz / 24oz</h4>
          </div>
          {#each menu.hotDrinks as drink}
            <MenuItem item={drink} />
          {/each}
        </div>
        <div class="column">
          <div class="row-space-between">
            <h2>Cold Drinks</h2>
            <h4>12oz / 20oz / 24oz</h4>
          </div>
          {#each menu.coldDrinks as drink}
            <MenuItem item={drink} />
          {/each}
        </div>
      </div>
    </Container>
  </div>
</section>

<style>
  section {
    padding: 16px;
    background-color: #151412;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    align-content: center;
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
