<script>
  export let company;

  import RouteLink from '../Routing/RouteLink.svelte';
  import CoffeeIcon from '../Elements/CoffeeIcon.svelte';
</script>

<header>
  <a href="."><h1>{company}</h1></a>
  <nav class="navbar">
    <a class="navlink" href="/"><CoffeeIcon height='0.8em' width='0.8em' />Home</a>
    <a class="navlink" href="index.html?page=menu"><CoffeeIcon height='0.8em' width='0.8em' />Menu</a>
    <a class="navlink" href="index.html?page=about"><CoffeeIcon height='0.8em' width='0.8em' />About Us</a>
    <a class="navlink" href="index.html?page=contact"><CoffeeIcon height='0.8em' width='0.8em' />Contact Us</a>
  </nav>
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
  }

  .navlink:hover {
    filter: sepia(1) brightness(0.7) hue-rotate(315deg) saturate(4);
  }
</style>
