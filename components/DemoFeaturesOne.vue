<template>
   <section class="features-one">
      <div class="container">
         <h2 class="features-one__title">Amazing Features</h2>
         <div class="features-one__grid">
            <div v-for="(feature, index) in visibleFeatures" :key="index" class="features-one__box">
               <div class="features-one__box__image">
                  <img :src="feature.image" :alt="feature.alt" width="121" height="121" />
               </div>
               <h3 class="features-one__box__title" v-html="feature.title"></h3>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { featuresData } from "@/data/DemoFeaturesOne";

// Computed property to filter out hidden features
const visibleFeatures = computed(() => {
   return featuresData.filter((feature) => !feature.hidden);
});
</script>

<style scoped>
/* Add your styles here */
</style>
