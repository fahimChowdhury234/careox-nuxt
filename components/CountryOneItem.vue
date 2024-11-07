<template>
   <div class="country-one__item text-center wow fadeInUp" :style="{ '--accent-color': countryData.accentColor }" data-wow-delay="00ms">
      <div class="country-one__item__flag">
         <img :src="countryData.image" :alt="countryData.country" />
         <div class="country-one__item__count" v-observe-visibility="visibilityChanged">
            <count-up :startVal="0" :endVal="startCounter ? countryData.count : 0"></count-up>
            k
         </div>
      </div>
      <h3 class="country-one__item__title">{{ countryData.country }}</h3>
      <p class="country-one__item__text">{{ countryData.description }}</p>
      <div class="country-one__item__rm">
         <a :href="countryData.link">Read More</a>
         <i class="icon-right-arrow"></i>
      </div>
   </div>
</template>

<script setup>
import CountUp from "vue-countup-v3";

defineProps({
   countryData: {
      type: Object,
      required: true,
   },
});
const startCounter = ref(false);
const visibilityChanged = (isVisible, entry) => {
   if (isVisible) {
      startCounter.value = true;
   }
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>
