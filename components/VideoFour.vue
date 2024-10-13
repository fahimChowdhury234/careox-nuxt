<template>
   <section class="video-four" :style="{ backgroundImage: `url(${videoSectionData.backgroundImage})` }">
      <!-- Shape One -->
      <div class="video-four__shape-one" :style="{ backgroundImage: `url(${videoSectionData.shapeOneImage})` }"></div>

      <!-- Shape Two -->
      <div class="video-four__shape-two" :style="{ backgroundImage: `url(${videoSectionData.shapeTwoImage})` }"></div>

      <!-- Video Section Content -->
      <div class="container">
         <div class="row">
            <div class="col-lg-5 wow fadeInUp">
               <div class="video-four__area">
                  <img :src="videoSectionData.videoButtonBgImage" alt="Video Background" />
                  <a :href="videoSectionData.videoUrl" class="video-popup">
                     <i class="icon-play-button"></i>
                     <i class="ripple"></i>
                  </a>
               </div>
            </div>
            <div class="col-lg-7 d-flex align-items-center">
               <div class="video-four__content wow fadeInRight" data-wow-delay="200ms">
                  <h5 class="video-four__sub-title">{{ videoSectionData.content.subTitle }}</h5>
                  <h2 class="video-four__title">{{ videoSectionData.content.title }}</h2>
                  <p class="video-four__text" v-html="videoSectionData.content.text"></p>
                  <NuxtLink :to="videoSectionData.content.buttonLink" class="careox-btn">
                     <span>{{ videoSectionData.content.buttonText }}</span>
                  </NuxtLink>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { videoSectionData } from "~/data/videoFour";
onMounted(() => {
   new GLightbox({
      selector: ".video-popup",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
   });
});
</script>

<style scoped>
/* Add your specific styles for the video section */
</style>
