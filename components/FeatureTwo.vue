<template>
   <section class="feature-two">
      <div class="container">
         <div class="row gutter-y-30">
            <FeatureTwoItem
               v-for="(item, index) in featuresData"
               :key="index"
               :title="item.title"
               :text="item.text"
               :accentColor="item.accentColor"
               :iconClass="item.iconClass"
               :featureImage="item.featureImage"
               :shapeImage="item.shapeImage"
               :link="item.link"
            />
         </div>
      </div>
   </section>
</template>

<script setup>
import { featuresData } from "@/data/FeatureTwo";
</script>

<style scoped>
/* Add any specific styles for this section */
</style>
