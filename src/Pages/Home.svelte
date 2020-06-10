<script>
	import company from '../static-content.js';

	import Hero from '../Sections/Hero.svelte';
	import PrimeInfo from '../Sections/PrimeInfo.svelte';
	import PhotoSlider from '../Sections/PhotoSlider.svelte';
</script>

<Hero company={company.name}/>
<PrimeInfo company={company.name} phone={company.phone}/>
<PhotoSlider/>
