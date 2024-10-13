<template>
   <section class="donations-two" id="donate">
      <div class="container">
         <div class="sec-title text-center">
            <h6 class="sec-title__tagline bw-split-in-right">
               <span class="sec-title__tagline__border"></span>
               {{ donationData.tagline }}
            </h6>
            <h3 class="sec-title__title bw-split-in-left" v-html="donationData.title"></h3>
         </div>

         <div class="donations-two__carousel owl-carousel">
            <client-only>
               <div ref="slider" class="my-slider">
                  <div class="slidep" v-for="cause in donationData.causes" :key="cause.id">
                     <DonationTwoItem :item="cause" />
                  </div>
               </div>
            </client-only>
         </div>
      </div>
   </section>
</template>

<script setup>
import { donationsTwoData } from "@/data/DonationsTwo";

const donationData = donationsTwoData;
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
         },
      });
   }
});
</script>

<style scoped></style>
