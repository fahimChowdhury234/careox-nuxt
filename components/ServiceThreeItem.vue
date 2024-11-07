<template>
   <div class="service-three__item text-center wow fadeInUp" :style="{ '--accent-color': service.accentColor }" :data-wow-delay="service.delay">
      <!-- Normal View -->
      <div class="service-three__item__normal">
         <div class="service-three__item__image">
            <img :src="service.imageNormal" alt="service image" />
         </div>
         <div class="service-three__item__icon">
            <span :class="service.icon"></span>
         </div>
         <h3 class="service-three__item__title">{{ service.title }}</h3>
         <p class="service-three__item__text">{{ service.text }}</p>
         <div class="service-three__item__rm">
            <NuxtLink :to="service.readMoreLink">Read More</NuxtLink>
            <i class="icon-right-arrow"></i>
         </div>
      </div>

      <!-- Hover View -->
      <div class="service-three__item__hover" :style="{ backgroundImage: 'url(' + service.imageHover + ')' }">
         <div class="service-three__item__hover__icon">
            <span :class="service.icon"></span>
         </div>
         <h3 class="service-three__item__hover__title">{{ service.title }}</h3>
         <p class="service-three__item__hover__text">{{ service.text }}</p>
         <div class="service-three__item__hover__rm">
            <NuxtLink :to="service.readMoreLink">Read More</NuxtLink>
            <i class="icon-right-arrow"></i>
         </div>
      </div>
   </div>
</template>

<script setup>
defineProps({
   service: {
      type: Object,
      required: true,
   },
});
</script>

<style scoped>
/* Add your styles here */
</style>
