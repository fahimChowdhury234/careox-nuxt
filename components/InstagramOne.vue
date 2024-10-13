<template>
   <section class="instagram-one">
      <div class="container-fluid">
         <div class="instagram-one__carousel " >
            <client-only>
               <div ref="slider" class="my-slider">
                  <div class="slide" v-for="item in instagramData" :key="item.id">
                     <InstagramOneItem :item="item" />
                  </div>
               </div>
            </client-only>
         </div>
      </div>
   </section>
</template>

<script setup>
import { instagramData } from "@/data/InstagramOne";

const slider = ref(null);

onMounted(async () => {
   if (typeof window !== "undefined") {
      const { tns } = await import("tiny-slider/src/tiny-slider");
      tns({
         container: slider.value,
         loop: true,
         autoplay: false,
         gutter: 20,
         mouseDrag: true,
         preventScrollOnTouch: "auto",
         nav: true,
         autoplayButtonOutput: false,
         controls: false,
         dots: true,
         autoplayTimeout: 6000,
         speed: 1000,
         responsive: {
            0: { items: 1 },
            575: { items: 2 },
            992: { items: 3 },
            1200: { items: 4 },
            1600: { items: 5 },
         },
      });
   }
});
</script>

<style scoped>
/* Add custom styles for InstagramSection if needed */
</style>
