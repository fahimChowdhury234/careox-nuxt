<template>
   <div :class="`client-carousel ${exClass}`">
      <div class="container">
         <client-only>
            <div ref="slider" class="my-slider">
               <div class="slide" v-for="(data, index) in clientData" :key="index">
                  <div class="client-carousel__one__item">
                     <img class="client-carousel__one__item__normal" :src="data.normal" :alt="data.alt" />
                     <img class="client-carousel__one__item__hover" :src="data.hover" :alt="data.alt" />
                  </div>
               </div>
            </div>
         </client-only>
      </div>
   </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { clientData } from "~/data/clientCarouselOne";

defineProps({
   exClass: String,
});

const slider = ref(null);

onMounted(async () => {
   if (typeof window !== "undefined") {
      const { tns } = await import("tiny-slider/src/tiny-slider");

      const sliderInstance = tns({
         container: slider.value,
         loop: true,
         autoplay: true,
         gutter: 30,
         mouseDrag: true,
         preventScrollOnTouch: "auto",
         nav: false,
         autoplayButtonOutput: false,
         controls: false,
         dots: true,
         autoplayTimeout: 4000,
         speed: 1000,
         responsive: {
            0: { items: 1 },
            360: { items: 2 },
            575: { items: 3 },
            768: { items: 3 },
            992: { items: 4 },
            1200: { items: 5 },
         },
      });
   }
});
</script>

<style lang="scss" scoped></style>
