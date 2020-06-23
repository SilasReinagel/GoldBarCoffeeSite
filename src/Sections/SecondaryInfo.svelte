<script>
  export let phone;

  import ThreeColumnLayout from '../Elements/ThreeColumnLayout.svelte';
  import CoffeeMenuTeaser from '../Sections/CoffeeMenuTeaser.svelte';
  import Hours from './Hours.svelte';
  import CafeBrandStatement from './CafeBrandStatement.svelte';
  import LiveJazz from './LiveJazz.svelte';
</script>

<section id="secondary-info">
  <ThreeColumnLayout>
    <div slot="first"><CoffeeMenuTeaser/></div>
    <div slot="second"><LiveJazz/></div>
    <div slot="third"><Hours phone={phone}/></div>
  </ThreeColumnLayout>
</section>

<style>
  section {
    padding: 16px;
    background-color: #151412;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    align-content: center;
  }
</style>
