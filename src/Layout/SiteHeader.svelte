<script>
  let sidebarOpen = false;

  import CoffeeIcon from '../Elements/CoffeeIcon.svelte';
  import HamburgerIcon from '../Elements/HamburgerIcon.svelte';
  import SiteSidebar from './SiteSidebar.svelte';

  import company, { pages } from '../static-content.js';
</script>

<header>
  <a href="."><h1>{company.name}</h1></a>
  <SiteSidebar bind:open={sidebarOpen}/>
  <nav class="navbar tablet-hidden">
    {#each pages as page}
      <a class="navlink" href={page.href}><CoffeeIcon height='1em' width='1em' />{page.name}</a>
    {/each}
  </nav>
  <HamburgerIcon bind:open={sidebarOpen}/>
</header>

<style>
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    background-color: rgba(21, 20, 18, 1);
    border-bottom-color: rgba(255, 255, 255, 0);
    height: 82px;
    padding: 0 16px;
  }

  h1 {
    margin: 10px;
  }

  .navlink {
    color: var(--primary-color);
    margin: 5px 15px;
    font-size: 1.1em;
    line-height: 22px;
    font-weight: 700;
    font-family: Oswald,sans-serif;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    transition-duration: 0.2s;
    filter: brightness(0) saturate(100%) invert(100%)
  }

  .navlink:hover {
    filter: brightness(0) saturate(100%) invert(81%) sepia(6%) saturate(2751%) hue-rotate(341deg) brightness(88%) contrast(74%);
  }

</style>
