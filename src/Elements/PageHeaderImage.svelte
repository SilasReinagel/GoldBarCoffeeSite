<script>
  export let src;
  export let alt;
</script>

<div>
  <img src={src} alt={alt} lazy="false"/>
</div>

<style>
  div {
    width: 100vw;
    height: 16em;
    overflow: hidden;
    vertical-align: middle;
    background-color: #7d605a;
  }
</style>