<template>
   <section class="main-slider-two" id="home">
      <client-only>
         <div ref="slider" class="my-slider">
            <div class="slide" v-for="item in sliderData.data" :key="item.id">
               <MainSliderTwoItem :data="item" :url="sliderData.videoUrl" />
            </div>
         </div>
      </client-only>
   </section>
</template>

<script setup>
import { sliderData } from "~/data/MainSliderTwo";
const slider = ref(null);

onMounted(async () => {
   if (typeof window !== "undefined") {
      const { tns } = await import("tiny-slider/src/tiny-slider");
      tns({
         container: slider.value,
         loop: true,
         autoplay: false,
         mode: "gallery",
         animateIn: "fadeIn",
         animateOut: "fadeOut",
         items: 1,
         gutter: 0,
         mouseDrag: true,
         preventScrollOnTouch: "auto",
         nav: true,
         autoplayButtonOutput: false,
         controls: false,
         dots: true,
         autoplayTimeout: 6000,
         speed: 1000,
      });
   }
});
</script>
<style scoped></style>
