<template>
   <div>
      <section class="team-two team-two--page">
         <div class="container">
            <div class="sec-title text-center">
               <h6 class="sec-title__tagline bw-split-in-right">
                  <span class="sec-title__tagline__border"></span>
                  Our Expert Team
               </h6>
               <h3 class="sec-title__title bw-split-in-left">Meet The Team Member</h3>
            </div>
            <!-- /.sec-title -->
            <div class="team-two__carousel">
               <client-only>
                  <div ref="slider" class="my-slider">
                     <div class="slide" v-for="(teamMember, index) in teamMembers" :key="index">
                        <TeamCardTwo :teamMember="teamMember" />
                     </div>
                  </div>
               </client-only>
            </div>
         </div>
      </section>
   </div>
</template>

<script setup>
import { teamMembers } from "@/data/Teams";

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
         nav: true,
         autoplayButtonOutput: false,
         controls: false,
         dots: true,
         navPosition: "bottom",
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

<style lang="scss" scoped></style>
