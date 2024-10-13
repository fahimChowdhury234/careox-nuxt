<template>
   <div class="donation-details__author">
      <div class="donation-details__author__top">
         <img :src="author.authorImage" alt="careox" />
         <div class="donation-details__author__content">
            <h3 class="donation-details__author__title">{{ author.name }}</h3>
            <p class="donation-details__author__designation">{{ author.designation }}</p>
         </div>
      </div>
      <ul class="donation-details__author__list">
         <li><i class="icofont-ui-calendar"></i>{{ author.date }}</li>
         <li><i class="icofont-ui-folder"></i>{{ author.category }}</li>
         <li><i class="icofont-location-pin"></i>{{ author.location }}</li>
      </ul>
   </div>
</template>

<script setup>
// Import author image
import { author } from "@/data/Donate";
</script>

<style scoped>
/* Add styles for author details here */
</style>
