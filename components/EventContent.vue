<template>
   <div class="event-details__content">
      <div class="event-details__image">
         <img :src="eventData.eventImage" alt="event image" />
      </div>
      <h3 class="event-details__title">{{ eventData.title }}</h3>
      <p class="event-details__text">{{ eventData.contentText1 }}</p>
      <p class="event-details__text">{{ eventData.contentText2 }}</p>
      <NuxtLink to="/donate" class="careox-btn"><span>Donate Now</span></NuxtLink>
   </div>
</template>

<script setup>
import { eventData } from "~/data/EventDetails";
</script>

<style scoped>
/* Add your styles here if needed */
</style>
