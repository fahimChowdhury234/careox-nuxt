<template>
   <div class="team-card wow fadeInUp" :style="`--accent-color: ${accentColor}`">
      <div class="team-card__image">
         <img :src="member.image" :alt="member.name" />
      </div>
      <div class="team-card__content">
         <h3 class="team-card__title">
            <NuxtLink to="/team-details">{{ member.name }}</NuxtLink>
         </h3>
         <p class="team-card__designation">{{ member.designation }}</p>
         <div class="team-card__hover">
            <span class="team-card__hover__btn"></span>
            <div class="team-card__hover__social">
               <a v-for="(data, i) in member.social" :key="i" :href="data.url" :style="`--accent-color: ${accentColor}`">
                  <i :class="data.icon" aria-hidden="true"></i>
               </a>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
defineProps({
   member: Object,
   accentColor: String,
});
</script>

<style scoped>
/* Your team card styles go here */
</style>
