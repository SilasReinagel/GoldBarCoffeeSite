<script>
	export let company;
	export let phone;

	import DefaultLayout from './Layout/DefaultLayout.svelte';
	import Hero from './Sections/Hero.svelte';
	import PrimeInfo from './Sections/PrimeInfo.svelte';
	import PhotoSlider from './Sections/PhotoSlider.svelte';
	console.log(company);
</script>

<main>
	<DefaultLayout company={company}>
		<Hero company={company}/>
		<PrimeInfo company={company} phone={phone}/>
		<PhotoSlider/>	
	</DefaultLayout>
</main>

<style>

</style>