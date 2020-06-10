<script>
  export let href;

  import { currentRoute } from '../store';

  const redirectTo = e => {
    currentRoute.set(e.target.pathname);
    window.history.pushState({path: href}, '', window.location.origin + href);
  }
</script>

<a href={href} on:click|preventDefault={redirectTo}><slot/></a>
