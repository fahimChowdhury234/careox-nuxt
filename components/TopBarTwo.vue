<template>
   <div class="topbar-two">
      <div class="container">
         <div class="topbar-two__inner">
            <ul class="topbar-two__info">
               <li v-for="(info, index) in topbarTwoData.contactInfo" :key="index">
                  <span class="topbar-two__info__icon"><i :class="info.iconClass"></i></span>
                  <NuxtLink :href="info.link">{{ info.text }}</NuxtLink>
               </li>
            </ul>
            <ul class="list-unstyled topbar-two__nav">
               <li v-for="(navItem, index) in topbarTwoData.navLinks" :key="index">
                  <NuxtLink :to="navItem.link">{{ navItem.text }}</NuxtLink>
               </li>
            </ul>
         </div>
      </div>
   </div>
</template>

<script setup>
import { topbarTwoData } from "@/data/TopBarTwo";
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>
