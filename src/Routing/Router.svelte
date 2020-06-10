<script>
  import { onDestroy } from 'svelte';
  import { currentRoute } from '../store';
  import routes from '../routes';

  let component;
  const unsubscribe = currentRoute.subscribe(value => {
    component = routes.filter(r => r.path.toLocaleLowerCase() === ($currentRoute).toLocaleLowerCase())[0].component;
  })
  onDestroy(unsubscribe);
</script>

<style>
</style>

<div class="main-container">
  <svelte:component this={component} />
</div>
