<svelte:head>
	<link rel="stylesheet" href="/swiper/swiper.min.css">
	<script defer src="/swiper/swiper.min.js" on:load={initSlider}></script>
</svelte:head>

<script>
  const initSlider = () => {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
</script>

<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide"><img src="/images/cafe-entrance-01.jpg" loading="lazy"/></div>
    <div class="swiper-slide"><img src="/images/live-jazz-01.jpg" loading="lazy"/></div>
    <div class="swiper-slide"><img src="/images/cafe-01.jpg" loading="lazy"/></div>
    <div class="swiper-slide"><img src="/images/people-in-cafe-01.jpg" loading="lazy"/></div>
    <div class="swiper-slide"><img src="/images/hours-sign.jpg" loading="lazy"/></div>
    <div class="swiper-slide"><img src="/images/cafe-03.jpg" loading="lazy"/></div>
  </div>
  <div class="swiper-pagination"></div>
</div>

<style>
  .swiper-container {
    height: 330px;
    background-color: var(--primary-background-color);
  }

  .swiper-wrapper div {
    height: 330px;
    width: 440px;
  }

  img {
    height: 100%;
    width: auto;
  }
</style>
