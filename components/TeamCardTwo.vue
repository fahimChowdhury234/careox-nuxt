<template>
   <div class="team-card-two wow fadeInUp" :data-wow-duration="'1500ms'" :data-wow-delay="teamMember.delay" :style="{ '--accent-color': teamMember.accentColor }">
      <div class="team-card-two__content">
         <h3 class="team-card-two__title">
            <NuxtLink href="/team-details">{{ teamMember.name }}</NuxtLink>
         </h3>
         <p class="team-card-two__designation">{{ teamMember.designation }}</p>
         <div class="team-card-two__hover">
            <span class="team-card-two__hover__btn"></span>
            <div class="team-card-two__hover__social">
               <NuxtLink v-for="social in teamMember.socials" :key="social.platform" :href="social.url" :style="{ '--accent-color': social.color }">
                  <i :class="social.icon" aria-hidden="true"></i>
                  <span class="sr-only">{{ social.platform }}</span>
               </NuxtLink>
            </div>
         </div>
      </div>
      <div class="team-card-two__image">
         <img :src="teamMember.image" :alt="teamMember.name" />
      </div>
   </div>
</template>

<script setup>
defineProps({
   teamMember: {
      type: Object,
      required: true,
   },
});
</script>

<style scoped>
/* Add your styles here */
</style>
