<template>
   <section :class="`video-one ${exClass}`">
      <div class="video-one__bg jarallax" ref="jarallaxElement" :style="{ backgroundImage: `url(${videoData.bgImage})` }"></div>
      <div class="video-one__shape-one" :style="{ backgroundImage: `url(${videoData.shapeOne})` }"></div>
      <div class="video-one__shape-two" :style="{ backgroundImage: `url(${videoData.shapeTwo})` }"></div>
      <div class="container">
         <!-- Client-only to prevent SSR issues -->
         <a class="video-popup" :href="`${videoData.videoUrl}`">
            <i class="icon-play-button"></i>
            <i class="ripple"></i>
         </a>
         <h5 class="video-one__sub-title">{{ videoData.subTitle }}</h5>
         <h2 class="video-one__title">{{ videoData.title }}</h2>
         <p class="video-one__text" v-html="videoData.text"></p>
         <NuxtLink :to="videoData.btnLink" class="careox-btn"
            ><span>{{ videoData.btnText }}</span>
         </NuxtLink>
      </div>
   </section>
</template>

<script setup>
import { videoData } from "@/data/VideoOne";
const jarallaxElement = ref(null);
defineProps({
   exClass: String,
});
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

<style scoped>
/* Add your component-specific styles here */
</style>
