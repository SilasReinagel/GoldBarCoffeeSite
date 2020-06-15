<script>
  export let src;
  export let alt;
</script>

<div>
  <img src={src} alt={alt}/>
</div>

<style>
  div {
    width: 100vw;
    height: 300px;
    overflow: hidden;
    vertical-align: middle;
  }
</style>