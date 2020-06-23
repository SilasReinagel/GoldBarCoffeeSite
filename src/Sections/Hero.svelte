<script>
  export let company;
</script>

 <div class="hero-image">
  <div class="hero-text">
    <h1>Welcome to {company}</h1>
    <p>The choice of the connoisseur since 1994</p>
  </div>
</div>

<style>
  .hero-image {
    background-color: #647163;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/hero-01.jpg");

    min-height: 80vh;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .hero-text {
    text-align: center;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }

  h1 {
    font-size: 2.6em;
  }

  p {
    color: #ccc;
    font-size: 1.2em;
  }

  @media screen and (max-width: 600px) {
    .hero-image {
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/hero-01-tall-sm.jpg");
    }
  }
</style>
