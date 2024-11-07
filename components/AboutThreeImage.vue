<template>
   <div class="about-three__image">
      <div class="about-three__image__shape-one">
         <img :src="imageData.shapeOne" alt="careox" />
      </div>
      <img :src="imageData.aboutImage2" alt="careox" />
      <div class="about-three__image__right wow fadeInUp" data-wow-delay="300ms">
         <img :src="imageData.aboutImage1" alt="careox" />
      </div>
      <div class="about-three__image__shape-two">
         <img :src="imageData.shapeTwo" alt="careox" />
      </div>
   </div>
</template>

<script setup>
import { imageData } from "@/data/AboutThree";
</script>

<style scoped>
/* Add your styles here */
</style>
