<template>
   <section class="cta-two">
      <div class="cta-two__shape" :style="{ backgroundImage: `url(${ctaData.shapeImage})` }"></div>
      <div class="container">
         <div class="row">
            <div class="col-md-7">
               <div class="sec-title text-left">
                  <h6 class="sec-title__tagline bw-split-in-right"><span class="sec-title__tagline__border"></span>{{ ctaData.tagline }}</h6>
                  <h3 class="sec-title__title bw-split-in-left">{{ ctaData.title }}</h3>
               </div>
            </div>
            <div class="col-md-5">
               <div class="cta-two__button">
                  <img :src="ctaData.arrowImage" alt="arrow" />
                  <NuxtLink :to="ctaData.buttonLink" class="careox-btn"
                     ><span>{{ ctaData.buttonText }}</span>
                  </NuxtLink>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { ctaData } from "@/data/CtaTwo";
</script>

<style scoped>
/* Add custom styles for CtaTwo section if needed */
</style>
