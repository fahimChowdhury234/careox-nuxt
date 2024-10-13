<template>
   <div>
      <div class="sec-title text-center">
         <h6 class="sec-title__tagline bw-split-in-right">
            <span class="sec-title__tagline__border"></span>
            {{ serviceContent.tagline }}
         </h6>
         <h3 class="sec-title__title bw-split-in-left" v-html="serviceContent.title"></h3>
      </div>
   </div>
</template>

<script setup>
import { serviceContent } from "@/data/ServicesThree"; // Importing content data from serviceData.js
</script>

<style scoped>
/* Add your styles here */
</style>
