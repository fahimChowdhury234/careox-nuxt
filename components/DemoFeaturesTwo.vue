<template>
   <section class="features-two">
      <div class="container">
         <div class="row">
            <div v-for="(feature, index) in featuresTwoData" :key="index" class="col-md-6 col-lg-3">
               <div class="features-two__box">
                  <img :src="feature.image" :width="feature.width" :height="feature.height" :alt="feature.alt" />
                  <h2 class="features-two__title" v-html="feature.title"></h2>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { featuresTwoData } from "@/data/DemoFeaturesTwo";
</script>

<style scoped></style>
