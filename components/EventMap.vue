<template>
   <div class="event-details__map">
      <div class="google-map google-map__contact">
         <iframe :src="eventData.mapIframeSrc" class="map__contact" allowfullscreen></iframe>
      </div>
   </div>
</template>

<script setup>
import { eventData } from "~/data/EventDetails";
</script>

<style scoped>
/* Add your styles here if needed */
</style>
