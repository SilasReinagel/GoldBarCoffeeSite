<script>
  export let company;
</script>

<header>
  <a href="."><h1>{company}</h1></a>
  <ul class="navbar">
    <li><a href=".">Home</a></li>
    <li><a href=".">Menu</a></li>
    <li><a href=".">About Us</a></li>
    <li><a href=".">Contact Us</a></li>
  </ul>
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

  .a {
    font-family: 'Zilla Slab', 'Times New Roman', Times, serif;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
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
