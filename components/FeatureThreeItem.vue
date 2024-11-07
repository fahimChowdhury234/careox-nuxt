<template>
   <div class="feature-three__item" :style="{ '--accent-color': accentColor }">
      <div class="feature-three__item__shape" :style="{ backgroundImage: `url(${shape})` }"></div>
      <div class="feature-three__item__hover" :style="{ backgroundImage: `url(${hoverImage})` }"></div>

      <div class="feature-three__item__top">
         <div class="feature-three__item__icon">
            <span :class="icon"></span>
         </div>
         <h3 class="feature-three__item__title">{{ title }}</h3>
      </div>

      <p class="feature-three__item__text">{{ text }}</p>

      <ul class="feature-three__item__list">
         <li v-for="(item, index) in list" :key="index">
            <span class="feature-three__item__list__icon">
               <i class="icofont-check-circled"></i>
            </span>
            {{ item }}
         </li>
      </ul>

      <NuxtLink :href="buttonLink" class="careox-btn">
         <span>{{ buttonText }}</span>
      </NuxtLink>
   </div>
</template>

<script setup>
const props = defineProps({
   icon: String,
   title: String,
   text: String,
   list: Array,
   buttonText: String,
   buttonLink: String,
   shape: String,
   hoverImage: String,
   accentColor: String,
});
</script>

<style scoped>
/* Your custom styles for the feature item */
</style>
