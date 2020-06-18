<script>
  import MenuItem from '../Elements/MenuItem.svelte';
  import TwoColumnLayout from '../Elements/TwoColumnLayout.svelte';
  import StandardPageLayout from '../Elements/StandardPageLayout.svelte';

  import { menu } from '../static-content';
</script>

<StandardPageLayout title="Coffee & Drinks Menu" headerImg="/images/cafe-04.jpg" alt="Cafe">
  <TwoColumnLayout>
    <div slot="first">
      <div class="row-space-between">
        <h2>Hot Drinks</h2>
        <h4>12oz / 16oz / 20oz / 24oz</h4>
      </div>
      <hr/>
      {#each menu.hotDrinks as drink}
        <MenuItem item={drink} />
      {/each}
    </div>
    <div slot="second">
      <div class="row-space-between">
        <h2>Cold Drinks</h2>
        <h4>12oz / 20oz / 24oz</h4>
      </div>
      <hr/>
      {#each menu.coldDrinks as drink}
        <MenuItem item={drink} />
      {/each}
    </div>
  </TwoColumnLayout>
</StandardPageLayout>

<style>
  h2 {
    size: 2.4em;
    margin-right: 1em;
  }

  h4 {
    size: 1.2em;
  }

  hr {
    vertical-align: middle;
    border-bottom: 2px solid #c7a17a;
    margin: 0 0 1.5em 0;
    width: 120px;
  }

  h2, h4 {
    color: var(--alternate-color);
  }

  .row-space-between {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }

  @media screen and (max-width: 600px) {
    h2 {
      size: 1.8em;
    }

    h4 {
      size: 1.0em;
    }
  }

</style>
