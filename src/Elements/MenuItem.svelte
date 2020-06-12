<script>
  export let item;

  const { name, prices, description } = item;
</script>

<div>
  <div class="row">
    <h4>{name}</h4>
    <h4>{prices.toString()}</h4>
  </div>
  <p class="description">{description}</p>
</div>

<style>
  h4, p {
    color: var(--alternate-color);
  }

  h4 {
    margin-bottom: 0px;
    margin-top: 0.7em;
  }

  .description {
    color: #888;
    margin-top: 4px;
  }

 .row {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
 }
</style>