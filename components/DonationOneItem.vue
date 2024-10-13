<template>
   <div class="donations-one__item" :style="{ '--accent-color': donation.accentColor }">
      <div class="donations-one__item__image">
         <img :src="donation.image" alt="careox" />
         <NuxtLink :to="donation.link" class="donations-one__item__image__link"></NuxtLink>
         <div class="donations-one__item__category">{{ donation.category }}</div>
      </div>
      <div class="donations-one__item__content">
         <h3 class="donations-one__item__title">
            <NuxtLink :to="donation.link">{{ donation.title }}</NuxtLink>
         </h3>
         <p class="donations-one__item__text">{{ donation.text }}</p>
         <a class="donations-one__item__rm" :href="donation.link">
            <i class="icon-right-arrow"></i>
         </a>
      </div>
      <div class="donations-one__item__bottom">
         <div class="donations-one__item__bottom__shape" :style="{ backgroundImage: 'url(' + donation.shape + ')' }"></div>
         <DonationsProgress :percent="donation.percent" />
         <div class="donations-one__item__bottom__text">
            <span>{{ donation.goal }} Goals</span>
            <span>{{ donation.donated }} Donate</span>
         </div>
      </div>
   </div>
</template>

<script setup>
defineProps({
   donation: Object,
});
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
