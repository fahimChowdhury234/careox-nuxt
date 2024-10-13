<template>
   <div class="service-three__carousel">
      <client-only>
         <div ref="slider" class="my-slider">
            <div class="slide" v-for="(service, index) in services" :key="index">
               <ServiceThreeItem :service="service" />
            </div>
         </div>
      </client-only>
   </div>
</template>

<script setup>
import { services } from "@/data/ServicesThree"; // Importing services data from serviceData.js

const slider = ref(null);

onMounted(async () => {
   if (typeof window !== "undefined") {
      const { tns } = await import("tiny-slider/src/tiny-slider");
      tns({
         container: slider.value,
         loop: false,
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
            570: { items: 2 },
            992: { items: 3 },
         },
      });
   }
});
</script>

<style scoped>
/* Add your styles here */
</style>
