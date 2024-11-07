<!-- ~/components/VolunteerItem.vue -->

<template>
   <div class="volunteer__item" :class="{ 'volunteer__item--center': centered }">
      <a :href="volunteer.link">
         <img :src="volunteer.image" :alt="volunteer.name" />
      </a>
      <div class="volunteer__item__content">
         <h5 class="volunteer__item__title">
            <a :href="volunteer.link">{{ volunteer.name }}</a>
         </h5>
         <p class="volunteer__item__designation">{{ volunteer.role }}</p>
      </div>
   </div>
</template>

<script setup>
defineProps({
   volunteer: {
      type: Object,
      required: true,
   },
   centered: {
      type: Boolean,
      default: false,
   },
});
</script>

<style scoped>
/* Add necessary scoped styles here */
</style>
