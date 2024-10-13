<template>
   <section class="donations-one">
      <div class="container">
         <div class="sec-title text-left">
            <h6 class="sec-title__tagline bw-split-in-right"><span class="sec-title__tagline__border"></span>Our Popular Causes</h6>
            <h3 class="sec-title__title bw-split-in-left">Help & Donate Now Find <br />The Popular Cause</h3>
         </div>
         <div class="donations-one__carousel">
            <client-only>
               <div ref="slider" class="my-slider">
                  <div class="slide" v-for="donation in donationsData" :key="donation.id">
                     <DonationOneItem :donation="donation" />
                  </div>
               </div>
            </client-only>
         </div>
      </div>
   </section>
</template>

<script setup>
import { donationsData } from "@/data/DonationsOne";
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
         controls: false,
         autoplayButtonOutput: false,
         dots: false,
         autoplayTimeout: 6000,
         speed: 1000,
         responsive: {
            0: { items: 1 },
            500: { items: 2 },
            992: { items: 3 },
         },
      });
   }
});
</script>

<style scoped></style>
