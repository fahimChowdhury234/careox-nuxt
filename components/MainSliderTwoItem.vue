<template>
   <div class="main-slider-two__item">
      <div class="main-slider-two__bg" :style="`background-image: url(${data.background})`"></div>
      <div class="main-slider-two__shape-one"><img :src="data.shapeOne" alt="shape one" /></div>
      <div class="main-slider-two__shape-two"><img :src="data.shapeTwo" alt="shape two" /></div>
      <div class="main-slider-two__shape-three"><img :src="data.shapeThree" alt="shape three" /></div>
      <div class="main-slider-two__overlay"></div>
      <div class="container">
         <div class="main-slider-two__content">
            <h2 class="main-slider-two__title">
               <span class="main-slider-two__title__text">Making <span>Charity</span> The</span><br />
               <span class="main-slider-two__title__text">Poor People Get</span><br />
               <span class="main-slider-two__title__text">Helping Now.</span>
            </h2>
            <p class="main-slider-two__text">
               Poor can only be as strong as our people & because of team<br />
               have designed game changing products.
            </p>
            <div class="main-slider-two__btn">
               <NuxtLink href="/become-a-volunteer" class="careox-btn"><span>Join With Us</span></NuxtLink>
               <div class="main-slider-two__volunter">
                  <img v-for="(image, index) in data.volunteerImages" :src="image" :key="index" alt="volunteer" />
               </div>
            </div>
            <NuxtLink :to="url" class="video-popup">
               <i class="icon-play-button"></i>
               <i class="ripple"></i>
            </NuxtLink>
         </div>
      </div>
   </div>
</template>

<script setup>
const props = defineProps({
   data: Object,
   url: String,
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
/* Add specific CSS for your slider item here */
</style>
