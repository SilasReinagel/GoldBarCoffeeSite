<script>
	import company from './static-content.js';

	import DefaultLayout from './Layout/DefaultLayout.svelte';
	import Home from './Pages/Home.svelte';
	import Router from './Routing/Router.svelte';
</script>

<main>
	<DefaultLayout company={company}>
		<Router />
	</DefaultLayout>
</main>

<style>

</style>