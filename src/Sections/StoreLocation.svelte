<script>
  import company from '../static-content.js';
</script>

<div class="img-box">
  <img src="/images/cafe-entrance-01.jpg" alt="Coffee Shop Entrance" loading="lazy"/>
</div>
<h4>Come Join Us For A Drink</h4>
<p><b>{company.name}</b> is located in Tempe, AZ, at the NE Corner of McClintock and Southern.</p>
<div class="row">
  <div class="address">
    <h3>Our Address</h3>
    <p>{company.address.line1}<br>{company.address.city}, {company.address.state}, {company.address.zip5}</p>
  </div>
  <div class="phone">
    <h3>Our Phone</h3>
    <p>{company.phone}</p>
  </div>
</div>

<style>
  img {
    border: 2px #fff solid;
  }

  h4 {
    font-size: 1.4em;
  }
</style>