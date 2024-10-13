<template>
   <section class="donations-three">
      <div class="donations-three__bg" :style="{ backgroundImage: `url(${donationsData.backgroundImage})` }"></div>
      <div class="container">
         <div class="sec-title text-left">
            <h6 class="sec-title__tagline bw-split-in-right"><span class="sec-title__tagline__border"></span>{{ donationsData.sectionTitle.tagline }}</h6>
            <h3 class="sec-title__title bw-split-in-left" v-html="donationsData.sectionTitle.title"></h3>
         </div>

         <client-only>
            <div ref="slider" class="my-slider">
               <div class="slidep" v-for="item in donationsData.items" :key="item.id">
                  <DonationThreeItem :item="item" />
               </div>
            </div>
         </client-only>

         <div class="donations-three__text wow fadeInUp">
            <span>#</span> {{ donationsData.footerText }}
            <NuxtLink :to="donationsData.footerButtonLink" class="careox-btn">
               <span>{{ donationsData.footerButtonText }}</span>
            </NuxtLink>
         </div>
      </div>
   </section>
</template>

<script setup>
import { donationsData } from "@/data/DonationsThree";
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

<style scoped>
/* Add specific styles for the donation section if necessary */
</style>
