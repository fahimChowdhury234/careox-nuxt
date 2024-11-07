<template>
   <div class="col-lg-4 col-md-6 wow fadeInUp" :data-wow-delay="wowDelay">
      <div class="feature-four__item" :style="{ '--accent-color': accentColor }">
         <div class="feature-four__item__bg" :style="{ backgroundImage: `url(${bgImage})` }"></div>
         <div class="feature-four__item__content">
            <div class="feature-four__item__number"></div>
            <h3 class="feature-four__item__title">{{ title }}</h3>
            <p class="feature-four__item__text">{{ text }}</p>
            <NuxtLink :to="link" class="feature-four__item__rm">
               <span class="icon-right-arrow-two1"></span>
            </NuxtLink>
         </div>
      </div>
   </div>
</template>

<script setup>
// Define props to pass dynamic data from the parent component
const props = defineProps({
   wowDelay: String,
   accentColor: String,
   bgImage: String,
   title: String,
   text: String,
   link: String,
});
</script>

<style scoped>
/* Add specific styles if necessary */
</style>
