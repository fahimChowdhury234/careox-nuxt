<template>
   <section class="service-three" id="services">
      <div class="service-three__shape-left" :style="{ backgroundImage: 'url(' + serviceContent.shapeLeft + ')' }"></div>
      <div class="service-three__shape-right" :style="{ backgroundImage: 'url(' + serviceContent.shapeRight + ')' }"></div>
      <div class="container">
         <!-- Static Content Section -->
         <ServiceThreeContent />

         <!-- Carousel Section -->
         <ServiceThreeCarousel />
         <div class="service-three__text wow fadeInUp">
            <span>#</span>
            {{ serviceContent.bottomText }}
            <NuxtLink :to="serviceContent.donateLink" class="careox-btn">
               <span>{{ serviceContent.donateButtonText }}</span>
            </NuxtLink>
         </div>
      </div>
   </section>
</template>

<script setup>
import { serviceContent } from "~/data/ServicesThree";
</script>

<style scoped>
/* Add your styles here */
</style>
