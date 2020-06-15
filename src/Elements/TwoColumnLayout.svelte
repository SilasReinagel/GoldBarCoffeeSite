<script>
  import Container from './Container.svelte';
</script>

<Container>
  <div class="row">
    <div class="column">
      <slot name="first" />
    </div>
    <div class="column">
      <slot name="second" />
    </div>
  </div>
</Container>

<style>
  .row {
    display: flex;
    margin: 1.5em 0 8em 0;
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