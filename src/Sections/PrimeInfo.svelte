<script>
  export let company;
  export let phone;

  import DividerWithText from '../Elements/DividerWithText.svelte';
  import ThreeColumnLayout from '../Elements/ThreeColumnLayout.svelte';
  import Hours from './Hours.svelte';
  import CafeBrandStatement from './CafeBrandStatement.svelte';
  import StoreLocation from '../Sections/StoreLocation.svelte';
</script>

<section id="prime-info">
  <DividerWithText text={company} />
  <ThreeColumnLayout>
    <div slot="first"><CafeBrandStatement/></div>
    <div slot="second"><StoreLocation/></div>
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
