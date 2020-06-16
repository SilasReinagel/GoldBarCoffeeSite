<script>
  export let title = "New Page";
  export let headerImg = "/images/cafe-01.jpg";
  export let headerImgAlt = "Cafe";

  import DividerWithText from '../Elements/DividerWithText.svelte';
  import PageHeaderImage from '../Elements/PageHeaderImage.svelte';
</script>

<section>
  <PageHeaderImage src={headerImg} alt={headerImgAlt}/>
  <div class="bg-color">
    <DividerWithText text={title} />
  </div>
  <slot/>
</section>

<style>
  section {
    background-color: #fff;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    align-content: center;
  }

  .bg-color {
    background-color: var(--alternate-color);
    padding: 1em;
  }
</style>
