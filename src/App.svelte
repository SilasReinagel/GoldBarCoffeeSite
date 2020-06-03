<script>
	export let company;

	import DefaultLayout from './Layout/DefaultLayout.svelte';
	import Hero from './Sections/Hero/Hero.svelte';
	console.log(company);
</script>

<main>
	<DefaultLayout company={company}>
		<Hero company={company}/>
	</DefaultLayout>
</main>

<style>

</style>