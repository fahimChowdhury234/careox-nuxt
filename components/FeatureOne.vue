<template>
   <section :class="`feature-one ${exClass}`">
      <div class="feature-one__bg" :style="{ backgroundImage: `url(${featureOneData.bgImage})` }"></div>
      <div class="container">
         <div class="feature-one__shape" :style="{ backgroundImage: `url(${featureOneData.shapeArrow})` }"></div>
         <div class="row gutter-y-30">
            <div class="col-lg-4 col-md-6 wow fadeInUp" v-for="(feature, index) in featureOneData.features" :key="feature.id" :data-wow-delay="`${index * 100}ms`">
               <div class="feature-one__item" :class="{ 'feature-one__item--reverse': feature.isReverse }" :style="{ '--accent-color': feature.accentColor }">
                  <div class="feature-one__item__inner">
                     <div class="feature-one__item__shape" :style="{ backgroundImage: `url(${featureOneData.shapeIcon})` }"></div>
                     <div class="feature-one__item__icon">
                        <span :class="feature.icon"></span>
                     </div>
                     <h3 class="feature-one__item__title">{{ feature.title }}</h3>
                     <p class="feature-one__item__text">{{ feature.text }}</p>
                     <div class="feature-one__item__number"></div>
                     <NuxtLink :to="feature.link" class="feature-one__item__rm">
                        <span class="icon-up-arrow-two"></span>
                     </NuxtLink>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { featureOneData } from "@/data/FeatureOne";
defineProps({
   exClass: String,
});
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
