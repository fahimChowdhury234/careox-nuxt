<!-- ~/components/CountrySection.vue -->

<template>
  <section class="country-one" id="country">
    <div class="container">
      <div class="sec-title text-left">
        <h6 class="sec-title__tagline bw-split-in-right"><span class="sec-title__tagline__border"></span>Our Contribution country</h6>
        <h3 class="sec-title__title bw-split-in-left">
          The Popular Contribution Towards<br />
          Country Find Helping
        </h3>
      </div>
      <div class="country-one__carousel">
        <client-only>
          <div ref="slider" class="my-slider">
            <div class="slide" v-for="(country, index) in countryData" :key="index">
              <CountryOneItem :countryData="country" />
            </div>
          </div>
          <!-- Custom Controls -->
          <div id="custom_controlsContainer">
            <a id="prev"> <i class="icon-up-arrow-two"></i> </a>
            <a id="next"> <i class="icon-down-arrow-two"></i> </a>
          </div>
        </client-only>
      </div>
    </div>
  </section>
</template>

<script setup>
import { countryData } from "~/data/CountryOne";
const slider = ref(null);
onMounted(async () => {
  if (typeof window !== "undefined") {
    const { tns } = await import("tiny-slider/src/tiny-slider");
    tns({
      container: slider.value,
      mode: "carousel",
      loop: false,
      autoplay: false,
      items: 1,
      gutter: 30,
      preventScrollOnTouch: "auto",
      nav: false,
      mouseDrag: true,
      controlsContainer: "#custom_controlsContainer",
      prevButton: "#prev",
      nextButton: "#next",
      autoplayButtonOutput: false,
      dots: false,
      autoplayTimeout: 6000,
      speed: 1000,
      responsive: {
        0: { items: 1 },
        500: { items: 2 },
        992: { items: 3 },
        1200: { items: 4 },
      },
    });
  }
});
</script>

<style scoped>
#custom_controlsContainer {
  position: absolute;
  right: 0;
  top: -168px;
  flex-direction: column;
  display: flex;
  margin: 0;
  gap: 10px;
}
#custom_controlsContainer a {
  width: 50px;
  height: 50px;
  background-color: var(--careox-white);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 17px;
  color: var(--careox-black);
  transition: all 400ms ease;
  cursor: pointer;
}

#custom_controlsContainer a:hover {
  background-color: var(--careox-secondary);
  color: var(--careox-white);
}
</style>
