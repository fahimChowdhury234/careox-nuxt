<template>
   <section class="feature-four">
      <div class="container">
         <div class="row gutter-y-30">
            <FeatureFourItem
               v-for="(item, index) in featureItems"
               :key="index"
               :wowDelay="item.wowDelay"
               :accentColor="item.accentColor"
               :bgImage="item.bgImage"
               :title="item.title"
               :text="item.text"
               :link="item.link"
            />
         </div>
      </div>
   </section>
</template>

<script setup>
// Import the feature data
import { featureItems } from "@/data/FeatureFour";
</script>

<style scoped>
/* Add specific styles if necessary */
</style>
