<script>
  export let company;

  import RouteLink from '../Routing/RouteLink.svelte';
</script>

<header>
  <a href="."><h1>{company}</h1></a>
  <nav class="navbar">
    <RouteLink class="navlink" href="/">Home</RouteLink>
    <RouteLink class="navlink" href="/menu">Menu</RouteLink>
    <RouteLink class="navlink" href="/about">About Us</RouteLink>
    <RouteLink class="navlink" href="/contact">Contact Us</RouteLink>
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
    height: 70px;
    padding: 0 16px;
  }

  h1 {
    margin: 10px;
  }
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
  }

  .navlink {
    margin: 5px 15px;
    font-size: 15px;
    line-height: 22px;
    font-weight: 700;
    font-family: Oswald,sans-serif;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  li a {
    margin: 5px 15px;
    font-size: 15px;
    line-height: 22px;
    font-weight: 700;
    font-family: Oswald,sans-serif;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
</style>
