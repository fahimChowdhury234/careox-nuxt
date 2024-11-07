<template>
   <section class="why-choose-one">
      <div class="why-choose-one__bg jarallax" ref="jarallaxElement" :style="{ backgroundImage: `url(${whyChoose.bgImage})` }"></div>
      <div class="why-choose-one__shape" :style="{ backgroundImage: `url(${whyChoose.shapeImage})` }"></div>
      <div class="container">
         <div class="row">
            <div class="col-lg-2 col-xl-4"></div>
            <div class="col-lg-10 col-xl-8">
               <div class="sec-title text-left">
                  <h6 class="sec-title__tagline bw-split-in-right">
                     <span class="sec-title__tagline__border"></span>
                     {{ whyChoose.tagline }}
                  </h6>
                  <h3 class="sec-title__title bw-split-in-left" v-html="whyChoose.title"></h3>
               </div>
               <p class="why-choose-one__text">{{ whyChoose.description }}</p>
               <WhyChooseOneBox v-for="box in whyChoose.boxes" :key="box.id" :box="box" />
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { whyChooseData } from "@/data/whyChooseOne";
const whyChoose = whyChooseData;
const jarallaxElement = ref(null);

onMounted(() => {
   if (jarallaxElement) {
      useNuxtApp().$jarallax(jarallaxElement.value, {
         speed: 0.5,
         imgPosition: "50% 50%",
      });
   }
});
</script>

<style scoped></style>
