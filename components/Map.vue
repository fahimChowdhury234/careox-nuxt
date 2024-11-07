<template>
   <section class="contact-map">
      <div class="container-fluid">
         <div class="google-map google-map__contact">
            <iframe :title="map.title" :src="map.src" class="map__contact" allowfullscreen></iframe>
         </div>
      </div>
   </section>
</template>

<script setup>
import { mapData } from "~/data/map.js";
const map = mapData;
</script>

<style scoped>
/* Add any specific styles here */
</style>
