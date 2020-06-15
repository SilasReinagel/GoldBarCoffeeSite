<script>
  import { onDestroy } from 'svelte';
  import routes from '../routes';

  const page = '/' + (new URLSearchParams(window.location.search).get('page') || '');
  const matchingRoutes = routes.filter(r => r.path.toLocaleLowerCase() === (page).toLocaleLowerCase());
  // TODO: Handle Not Found Page
  const component = matchingRoutes[0].component;
</script>

<style>
</style>

<div class="main-container">
  <svelte:component this={component} />
</div>
