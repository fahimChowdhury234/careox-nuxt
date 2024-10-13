<template>
   <div class="main-slider-four__item">
      <div class="main-slider-four__bg">
         <img :src="bgImage" alt="careox" />
         <img :src="bgImage" alt="careox" />
      </div>
      <div class="container">
         <div class="row">
            <div class="col-lg-12 text-center">
               <div class="main-slider-four__content">
                  <div class="main-slider-four__heart">
                     <img :src="heartImage" alt="careox" />
                  </div>
                  <h2 class="main-slider-four__title">{{ title }}</h2>
                  <p class="main-slider-four__text" v-html="text"></p>
                  <div class="main-slider-four__btn">
                     <NuxtLink :to="buttonLink" class="careox-btn careox-btn--base">
                        <span>{{ buttonText }}</span>
                     </NuxtLink>
                     <NuxtLink :to="videoLink" class="video-popup">
                        <i class="icofont-ui-play"></i>
                        <span class="ripple"></span>
                     </NuxtLink>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
const props = defineProps({
   bgImage: String,
   heartImage: String,
   title: String,
   text: String,
   buttonLink: String,
   buttonText: String,
   videoLink: String,
});
</script>

<style scoped>
/* Add specific styles for the slider item here if necessary */
</style>
