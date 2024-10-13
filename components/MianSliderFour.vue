<template>
   <section class="main-slider-four" id="home">
      <client-only>
         <div ref="slider" class="my-slider">
            <div class="slide" v-for="(slide, index) in sliderData" :key="index">
               <MainSliderFourItem
                  :bgImage="slide.bgImage"
                  :heartImage="slide.heartImage"
                  :title="slide.title"
                  :text="slide.text"
                  :buttonLink="slide.buttonLink"
                  :buttonText="slide.buttonText"
                  :videoLink="slide.videoLink"
               />
            </div>
         </div>
      </client-only>
   </section>
</template>

<script setup>
import { sliderData } from "@/data/MainSliderFour";
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
         navPosition: "bottom",

         nav: true,
         autoplayButtonOutput: false,
         controls: false,
         dots: true,
         autoplayTimeout: 6000,
         speed: 1000,
      });
   }
   new GLightbox({
      selector: ".video-popup",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
   });
});
</script>

<style scoped>
/* Add specific styles for the slider component here if necessary */
</style>
