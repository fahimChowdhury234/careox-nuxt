<template>
   <div class="col-lg-4 col-md-6 wow fadeInUp">
      <div class="feature-two__item" :style="{ '--accent-color': accentColor }">
         <div class="feature-two__item__inner">
            <div class="feature-two__item__shape" :style="{ backgroundImage: `url(${shapeImage})` }"></div>
            <div class="feature-two__item__icon">
               <span :class="iconClass"></span>
            </div>
            <h3 class="feature-two__item__title">{{ title }}</h3>
            <p class="feature-two__item__text">{{ text }}</p>
         </div>
         <div class="feature-two__item__number"></div>
         <div class="feature-two__item__image">
            <img :src="featureImage" :alt="title" />
            <NuxtLink :to="link" class="feature-two__item__rm"><span class="icon-up-arrow-two"></span></NuxtLink>
         </div>
      </div>
   </div>
</template>

<script setup>
const props = defineProps({
   title: String,
   text: String,
   accentColor: String,
   iconClass: String,
   featureImage: String,
   shapeImage: String,
   link: String,
});
</script>

<style scoped>
/* Add any specific styles here */
</style>
