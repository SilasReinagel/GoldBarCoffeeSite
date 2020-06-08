<script>
  export let company;
</script>

<style>
  .hero-image {
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
</style>

 <div class="hero-image">
  <div class="hero-text">
    <h1>Welcome to {company}</h1>
    <p>The choice of the connoisseur since 1994</p>
  </div>
</div>
