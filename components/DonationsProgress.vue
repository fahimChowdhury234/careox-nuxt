<template>
   <div class="donations-one__item__bottom__progress" v-observe-visibility="visibilityChanged">
      <div class="donations-one__item__bottom__progress__inner count-bar" :style="{ width: startCounter ? Number(percent) + '%' : '0%' }">
         <div class="donations-one__item__bottom__progress__number count-text">
            <count-up :startVal="0" :endVal="startCounter ? Number(percent) : 0"></count-up>
            %
         </div>
      </div>
   </div>
</template>

<script setup>
import { ref } from "vue";
import CountUp from "vue-countup-v3";
const startCounter = ref(false);

defineProps({
   percent: Number,
});

const visibilityChanged = (isVisible, entry) => {
   if (isVisible) {
      startCounter.value = true;
   }
};
</script>

<style scoped>
/* Add progress bar specific styles here */
</style>
