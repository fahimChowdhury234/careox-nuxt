<template>
   <section class="info">
      <div class="container">
         <ul class="info__wrapper">
            <InfoItem v-for="(item, index) in infoData" :key="index" :item="item" />
         </ul>
      </div>
   </section>
</template>

<script setup>
import { infoData } from "~/data/Info.js";
</script>

<style scoped>
/* Add styles for the info section */
</style>
