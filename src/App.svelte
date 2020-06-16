<script>
	import DefaultLayout from './Layout/DefaultLayout.svelte';
	import Home from './Pages/Home.svelte';
	import Router from './Routing/Router.svelte';
</script>

<main>
	<DefaultLayout>
		<Router />
	</DefaultLayout>
</main>

<style>
main {
	width: 100%;
}
</style>