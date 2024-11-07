<template>
   <div class="about-four__content">
      <div class="sec-title text-left">
         <h6 class="sec-title__tagline bw-split-in-right"><span class="sec-title__tagline__border"></span>OUR ABOUT US</h6>
         <h3 class="sec-title__title bw-split-in-left">
            {{ title }}
         </h3>
      </div>
      <p class="about-four__content__text">{{ description }}</p>
      <div class="about-four__content__highlight">{{ highlight }}</div>
      <div class="about-four__content__border"></div>
      <div class="about-four__content__progress" v-observe-visibility="visibilityChanged">
         <div class="about-four__content__progress__bar">
            <div class="about-four__content__progress__inner count-bar" :style="{ width: startCounter ? progressPercent + '%' : '0%' }">
               <div class="about-four__content__progress__number count-text">
                  <count-up :startVal="0" :endVal="startCounter ? progressPercent : 0"></count-up>
                  %
               </div>
            </div>
         </div>
         <div class="about-four__content__progress__text">
            <span>{{ goalAmount }}</span>
            <span>{{ donatedAmount }}</span>
         </div>
      </div>
      <NuxtLink :to="buttonLink" class="careox-btn">
         <span>{{ buttonText }}</span>
      </NuxtLink>
   </div>
</template>

<script setup>
// Props for dynamic content data
import CountUp from "vue-countup-v3";
const startCounter = ref(false);
const props = defineProps({
   title: String,
   description: String,
   highlight: String,
   progressPercent: Number,
   goalAmount: String,
   donatedAmount: String,
   buttonLink: String,
   buttonText: String,
});
const visibilityChanged = (isVisible, entry) => {
   if (isVisible) {
      startCounter.value = true;
   }
};
</script>

<style scoped>
/* Add any specific styling related to the content section here */
</style>
