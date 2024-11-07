<template>
   <div class="col-lg-4 col-md-6 wow fadeInUp" :style="{ '--accent-color': service.accentColor }" data-wow-delay="100ms">
      <div class="service-two__item text-center">
         <div class="service-two__item__shape" :style="{ backgroundImage: `url(${service.shapeItem})` }"></div>
         <div class="service-two__item__image">
            <img :src="service.image" :alt="service.title" />
         </div>
         <div class="service-two__item__icon">
            <span :class="service.iconClass"></span>
         </div>
         <h3 class="service-two__item__title">{{ service.title }}</h3>
         <p class="service-two__item__text">{{ service.description }}</p>
         <div class="service-two__item__rm">
            <NuxtLink :to="service.readMoreLink">Read More</NuxtLink>
            <i class="icon-right-arrow"></i>
         </div>
      </div>
   </div>
</template>

<script setup>
const props = defineProps({
   service: Object,
});
</script>

<style scoped>
/* Scoped styles for service item */
</style>
