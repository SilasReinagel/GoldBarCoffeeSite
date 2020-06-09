<script>
	export let company;
	export let phone;

	import DefaultLayout from './Layout/DefaultLayout.svelte';
	import Hero from './Sections/Hero.svelte';
	import PrimeInfo from './Sections/PrimeInfo.svelte';
	console.log(company);
</script>

<main>
	<DefaultLayout company={company}>
		<Hero company={company}/>
		<PrimeInfo company={company} phone={phone}/>
	</DefaultLayout>
</main>

<style>

</style>