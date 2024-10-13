<template>
   <div class="donations-three__item" :style="{ '--accent-color': item.accentColor }">
      <div class="donations-three__item__image">
         <img :src="item.image" alt="careox" />
         <NuxtLink :to="item.detailsLink" class="donations-three__item__image__link"></NuxtLink>
         <div class="donations-three__item__category">{{ item.category }}</div>
         <a class="donations-three__item__rm" :href="item.detailsLink">
            <i class="icon-right-arrow"></i>
         </a>
      </div>
      <div class="donations-three__item__content">
         <h3 class="donations-three__item__title">
            <NuxtLink :to="item.detailsLink">{{ item.title }}</NuxtLink>
         </h3>
         <p class="donations-three__item__text">{{ item.description }}</p>
      </div>
      <div class="donations-three__item__border"></div>
      <div class="donations-three__item__bottom">
         <div class="donations-three__item__bottom__progress" v-observe-visibility="visibilityChanged">
            <div class="donations-three__item__bottom__progress__inner count-bar" :style="{ width: startCounter ? item.progressPercent + '%' : '0%' }">
               <div class="donations-three__item__bottom__progress__number count-text">
                  <count-up :startVal="0" :endVal="startCounter ? item.progressPercent : 0"></count-up>
                  %
               </div>
            </div>
         </div>
         <div class="donations-three__item__bottom__text">
            <span>{{ item.goalAmount }} Goals</span>
            <span>{{ item.donatedAmount }} Donate</span>
         </div>
      </div>
   </div>
</template>

<script setup>
import CountUp from "vue-countup-v3";
const startCounter = ref(false);
const props = defineProps({
   item: Object,
});
const visibilityChanged = (isVisible, entry) => {
   if (isVisible) {
      startCounter.value = true;
   }
};
</script>

<style scoped>
/* Add specific styles for the donation item if necessary */
</style>
