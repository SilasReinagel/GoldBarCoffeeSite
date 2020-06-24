<svelte:head>
	<link rel="preload" href="/swiper/swiper.min.css" as="stylesheet" crossorigin>
	<link rel="stylesheet" href="/swiper/swiper.min.css">
	<script defer src="/swiper/swiper.min.js" on:load={initSlider}></script>
</svelte:head>

<script>
  const initSlider = () => {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
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
    <div class="swiper-slide"><img src="/images/barista-02.jpg" alt="Cafe Pic" loading="lazy"/></div>
    <div class="swiper-slide"><img src="/images/cafe-05.jpg" alt="Cafe Pic" loading="lazy"/></div>
    <div class="swiper-slide"><img src="/images/live-jazz-04.jpg" alt="Cafe Pic" loading="lazy"/></div>
    <div class="swiper-slide"><img src="/images/cafe-entrance-01.jpg" alt="Cafe Pic" loading="lazy"/></div>
    <div class="swiper-slide"><img src="/images/cafe-06.jpg" alt="Cafe Pic"loading="lazy"/></div>
    <div class="swiper-slide"><img src="/images/live-jazz-03.jpg" alt="Cafe Pic" loading="lazy"/></div>
    <div class="swiper-slide"><img src="/images/cafe-01.jpg"alt="Cafe Pic" loading="lazy"/></div>
    <div class="swiper-slide"><img src="/images/cafe-03-md.jpg" alt="Cafe Pic" loading="lazy"/></div>
    <div class="swiper-slide"><img src="/images/hours-sign.jpg" alt="Cafe Pic"loading="lazy"/></div>
  </div>
  <div class="swiper-pagination"></div>
</div>

<style>
  .swiper-container {
    height: calc(9 * max(320px, min(33vw, 640px)) / 16);
    background-color: var(--primary-background-color);
  }

  .swiper-wrapper div {
    min-width: 320px;
    width: 33vw;
    max-width: 640px;
    height: auto;
    overflow: hidden;
    text-align: center;
    vertical-align: middle;
  }

  @media screen and (max-width: 600px) {
    .swiper-container {
      height: calc(9 * 100vw / 16);
    }

    .swiper-wrapper div {
      width: 100vw;
    }
  }
</style>
