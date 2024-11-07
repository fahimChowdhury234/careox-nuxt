<template>
   <div class="event-details__info">
      <ul class="event-details__info__list">
         <li>
            Starting Time: <span>{{ eventData.eventInfo.time }}</span>
         </li>
         <li>
            Date: <span>{{ eventData.eventInfo.date }}</span>
         </li>
         <li>
            Category: <span>{{ eventData.eventInfo.category }}</span>
         </li>
         <li>
            Phone: <span>{{ eventData.eventInfo.phone }}</span>
         </li>
         <li>
            Location: <span>{{ eventData.eventInfo.location }}</span>
         </li>
      </ul>
   </div>
</template>

<script setup>
import { eventData } from "~/data/EventDetails";
</script>

<style scoped>
/* Add your styles here if needed */
</style>
