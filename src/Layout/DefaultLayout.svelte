<script>
  export let company;

  import SiteHeader from './Header/SiteHeader.svelte';
  import SiteFooter from './Footer/SiteFooter.svelte';
  import CompanyFooter from './CompanyFooter.svelte';
</script>

<style>
  section {
    min-height: 80vh;
  }
</style>

<SiteHeader company={company.name} />
<section>
  <slot/>
</section>
<CompanyFooter company={company} />
<SiteFooter company={company} />

