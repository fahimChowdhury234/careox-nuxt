<template>
   <section class="video-three">
      <!-- Background image -->
      <div class="video-three__bg jarallax" ref="jarallaxElement" :style="{ backgroundImage: `url(${videoData.backgroundImage})` }"></div>

      <!-- Decorative shape -->
      <div class="video-three__shape" :style="{ backgroundImage: `url(${videoData.shapeImage})` }"></div>

      <!-- Overlay for darker video background -->
      <div class="video-three__overlay"></div>

      <div class="container">
         <!-- Video play button with a popup link -->
         <NuxtLink :to="videoData.videoUrl" class="video-popup">
            <i class="icon-play-button"></i>
            <i class="ripple"></i>
         </NuxtLink>

         <!-- Subtitle and title for the video section -->
         <h5 class="video-three__sub-title">{{ videoData.subTitle }}</h5>
         <h2 class="video-three__title">{{ videoData.title }}</h2>

         <!-- Video description text with HTML line breaks -->
         <p class="video-three__text" v-html="videoData.text"></p>

         <!-- Button linking to another page (about) -->
         <NuxtLink :to="videoData.buttonLink" class="careox-btn">
            <span>{{ videoData.buttonText }}</span>
         </NuxtLink>
      </div>
   </section>
</template>

<script setup>
// Import the data from the data file
import { videoThreeData } from "@/data/VideoThree";
const jarallaxElement = ref(null);

// Assign the data to a constant to use in the template
const videoData = videoThreeData;
onMounted(() => {
   if (jarallaxElement) {
      useNuxtApp().$jarallax(jarallaxElement.value, {
         speed: 0.5,
         imgPosition: "50% 50%",
      });
   }
   new GLightbox({
      selector: ".video-popup",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
   });
});
</script>

<style scoped></style>
