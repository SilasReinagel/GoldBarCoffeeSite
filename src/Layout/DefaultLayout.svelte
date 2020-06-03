<script>
  export let company;

  import SiteHeader from './Header/SiteHeader.svelte';
  import SiteFooter from './Footer/SiteFooter.svelte';
</script>

<style>
  section {
    min-height: 80vh;
  }
</style>

<SiteHeader company={company} />
<section>
  <slot>Content goes here.</slot>
</section>
<SiteFooter company={company} />

