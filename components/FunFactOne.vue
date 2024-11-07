<template>
   <section :class="`funfact-one ${exClass}`">
      <div class="container wow fadeInUp">
         <ul class="list-unstyled funfact-one__list" v-observe-visibility="visibilityChanged">
            <li v-for="(item, index) in funfactData" :key="index" class="funfact-one__item count-box" :style="{ '--accent-color': item.accentColor }">
               <div class="funfact-one__icon">
                  <i :class="item.icon"></i>
               </div>
               <div class="funfact-one__content">
                  <h3 class="funfact-one__count">
                     <count-up :startVal="0" :endVal="startCounter ? item.count : 0"></count-up>
                     {{ item.unit }}
                  </h3>
                  <p class="funfact-one__text">{{ item.text }}</p>
               </div>
            </li>
         </ul>
      </div>
   </section>
</template>

<script setup>
import { funfactData } from "~/data/FunFactOne";
import CountUp from "vue-countup-v3";
defineProps({
   exClass: String,
});
const startCounter = ref(false);
const visibilityChanged = (isVisible, entry) => {
   if (isVisible) {
      startCounter.value = true;
   }
};
</script>

<style scoped></style>
