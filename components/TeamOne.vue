<template>
   <section :class="`team-one ${exClass}`" id="team">
      <div class="container">
         <div class="sec-title text-center">
            <h6 class="sec-title__tagline bw-split-in-right"><span class="sec-title__tagline__border"></span>Our Expert Team</h6>
            <h3 class="sec-title__title bw-split-in-left">Meet The Team Member</h3>
         </div>

         <div class="team-one__carousel">
            <client-only>
               <div ref="slider" class="my-slider">
                  <div class="slide" v-for="(member, index) in teamData" :key="index">
                     <TeamOneCard :member="member" :accentColor="member.accentColor" />
                  </div>
               </div>
            </client-only>
         </div>
      </div>
   </section>
</template>

<script setup>
import { teamData } from "~/data/TeamOne";

defineProps({
   exClass: String,
});

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
            500: { items: 2 },
            992: { items: 3 },
            1200: { items: 4 },
         },
      });
   }
});
</script>

<style scoped>
/* Add any additional styles */
</style>
