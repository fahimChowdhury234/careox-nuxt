<template>
   <section class="feature-three">
      <div class="container-fluid">
         <div class="row">
            <div v-for="feature in featuresData" :key="feature.id" class="col-xl-3 col-md-6 wow fadeInUp" :data-wow-delay="`${(feature.id - 1) * 50}ms`">
               <FeatureThreeItem
                  :icon="feature.icon"
                  :title="feature.title"
                  :text="feature.text"
                  :list="feature.list"
                  :buttonText="feature.buttonText"
                  :buttonLink="feature.buttonLink"
                  :shape="feature.shape"
                  :hoverImage="feature.hoverImage"
                  :accentColor="feature.accentColor"
               />
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { featuresData } from "@/data/FeatureThree";
</script>

<style scoped>
/* Add any custom styling */
</style>
