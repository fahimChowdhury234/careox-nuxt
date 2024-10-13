<template>
   <div class="item">
      <div class="main-slider-one__item">
         <div class="main-slider-one__bg" :style="{ backgroundImage: `url(${mainBg})` }"></div>
         <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <circle class="circle0 steap" cx="50%" cy="55%" r="5.2%" />
            <circle class="circle1 steap" cx="50%" cy="55%" r="15.6%" />
            <circle class="circle2 steap" cx="50%" cy="55%" r="26%" />
            <circle class="circle3 steap" cx="50%" cy="55%" r="36.4%" />
            <circle class="circle4 steap" cx="50%" cy="55%" r="46.8%" />
            <circle class="circle5 steap" cx="50%" cy="55%" r="57%" />
            <circle class="circle6 steap" cx="50%" cy="55%" r="67.7%" />
            <circle class="circle7 steap" cx="50%" cy="55%" r="78.1%" />
            <circle class="circle8 steap" cx="50%" cy="55%" r="88.5%" />
            <circle class="circle9 steap" cx="50%" cy="55%" r="100%" />
         </svg>
         <div class="main-slider-one__shape-one"><img :src="shapes[0]" alt="shape-1" /></div>
         <div class="main-slider-one__shape-two"><img :src="shapes[1]" alt="shape-2" /></div>
         <div class="main-slider-one__shape-three"><img :src="shapes[2]" alt="shape-3" /></div>
         <div class="main-slider-one__shape-four"><img :src="shapes[3]" alt="shape-4" /></div>
         <div class="main-slider-one__layer" :style="{ backgroundImage: `url(${layerImage})` }">
            <div class="main-slider-one__layer__inner">
               <img :src="bgImage" alt="slider-layer" />
            </div>
         </div>
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="main-slider-one__content">
                     <div class="main-slider-one__image">
                        <img :src="shapes[4]" alt="arrow" />
                        <img :src="shapes[5]" alt="hand" />
                     </div>
                     <h2 class="main-slider-one__title" v-html="title"></h2>
                     <p class="main-slider-one__text" v-html="text"></p>
                     <div class="main-slider-one__btn">
                        <NuxtLink to="/about" class="careox-btn"><span>Discover more</span></NuxtLink>
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
   </div>
</template>

<script setup>
defineProps({
   mainBg: String,
   bgImage: String,
   layerImage: String,
   title: String,
   text: String,
   videoLink: String,
   shapes: Array,
});
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
/* Add relevant styles if needed */
</style>
