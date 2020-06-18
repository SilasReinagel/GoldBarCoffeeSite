<script>
  export let phone;
</script>

<section id="hours">
  <h3><b>Daily Hours</b></h3>
  <div class="line"><div class="day">Monday</div><div class="hours">6 am - 10 pm</div></div>
  <div class="line"><div class="day">Tuesday</div><div class="hours">6 am - 10 pm</div></div>
  <div class="line"><div class="day">Wednesday</div><div class="hours">6 am - 10 pm</div></div>
  <div class="line"><div class="day">Thursday</div><div class="hours">6 am - 10 pm</div></div>
  <div class="line"><div class="day">Friday</div><div class="hours">6 am - 11 pm</div></div>
  <div class="line"><div class="day">Saturday</div><div class="hours">6 am - 11 pm</div></div>
  <div class="line"><div class="day">Sunday</div><div class="hours">6 am - 11 pm</div></div>
  <div class="call">Call: {phone}</div>
</section>

<style>
  h3 {
    font-size: 2em;
    margin-top: 0px;
  }

  .day {
    font-size: 1.3em;
    color: #ddd;
    text-transform: uppercase;
    font-family: 'Zilla Slab', 'Times New Roman', Times, serif;
    letter-spacing: 0.05em;
  }

  .hours {
    font-size: 1.3em;
    color: #ddd;
    font-family: 'Zilla Slab', 'Times New Roman', Times, serif;
    letter-spacing: 0.05em;
  }

  section {
    padding: 2.4em 1.4em 3em 1.4em;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px #fff solid;
    height: auto;
    background-image: url("/images/drink-01-greyscale.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .line {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .call {
    margin-top: 30px;
    margin-bottom: 12px;
    font-size: 1.3em;
    color: #c7a17a;
    text-transform: uppercase;
  }
</style>