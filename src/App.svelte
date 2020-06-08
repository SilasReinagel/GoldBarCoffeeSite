<script>
	export let company;

	import DefaultLayout from './Layout/DefaultLayout.svelte';
	import Hero from './Sections/Hero.svelte';
	import PrimeInfo from './Sections/PrimeInfo.svelte';
	console.log(company);
</script>

<main>
	<DefaultLayout company={company}>
		<Hero company={company}/>
		<PrimeInfo company={company}/>
	</DefaultLayout>
</main>

<style>

</style>