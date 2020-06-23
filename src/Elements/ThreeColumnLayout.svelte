<script>
  import Container from '../Elements/Container.svelte';
  import DividerWithText from '../Elements/DividerWithText.svelte';
</script>

<Container>
  <div class="mobile-three-column-layout">
    <div class="column">
      <slot name="first"/>
    </div>
    <div class="column">
      <slot name="second"/>
    </div>
    <div class="column">
      <slot name="third"/>
    </div>
  </div>
</Container>

<style>
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
