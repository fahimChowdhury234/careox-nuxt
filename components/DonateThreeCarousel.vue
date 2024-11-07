<!-- ~/components/DonateCarousel.vue -->

<template>
   <div class="donate-three__carousel">
      <client-only>
         <div ref="slider" class="my-slider">
            <div class="slide" v-for="(support, index) in supports" :key="index">
               <div class="donate-three__support">
                  <img :src="support.image" :alt="support.title" />
                  <div class="donate-three__support__content">
                     <h3 class="donate-three__support__title">{{ support.title }}</h3>
                     <div class="donate-three__support__collected">
                        <span>Collected {{ support.collected }}</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </client-only>
   </div>
</template>

<script setup>
import { supports } from "~/data/DonateThree";

const slider = ref(null);
onMounted(async () => {
   if (typeof window !== "undefined") {
      const { tns } = await import("tiny-slider/src/tiny-slider");
      tns({
         container: slider.value,
         loop: true,
         autoplay: false,
         gutter: 30,
         mouseDrag: true,
         preventScrollOnTouch: "auto",
         nav: false,
         autoplayButtonOutput: false,
         controls: false,
         dots: false,
         autoplayTimeout: 6000,
         speed: 1000,
         responsive: {
            0: { items: 1 },
            500: { items: 2 },
         },
      });
   }
});
</script>

<style scoped>
/* Add any styles specific to the carousel here */
</style>
