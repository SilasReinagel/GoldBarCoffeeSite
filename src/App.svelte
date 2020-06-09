<script>
	export let company;

	import DefaultLayout from './Layout/DefaultLayout.svelte';
	import Hero from './Sections/Hero.svelte';
	import PrimeInfo from './Sections/PrimeInfo.svelte';
	import PhotoSlider from './Sections/PhotoSlider.svelte';
</script>

<main>
	<DefaultLayout company={company}>
		<Hero company={company.name}/>
		<PrimeInfo company={company.name} phone={company.phone}/>
		<PhotoSlider/>	
	</DefaultLayout>
</main>

<style>

</style>