<template>
   <div v-if="tab" class="tab fadeInUp animated" :class="isActive ? 'active-tab' : ''">
      <div class="tab-one__content">
         <div class="tab-one__content__bg" :style="{ backgroundImage: `url(${tab.backgroundImage})` }"></div>
         <div class="row">
            <div class="col-lg-6">
               <div class="tab-one__content__image">
                  <img :src="tab.image" :alt="tab.name" />
                  <div class="tab-one__content__image__shape" :style="{ backgroundImage: `url(${tab.shape})` }"></div>
               </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center">
               <div class="tab-one__content__right">
                  <h3 class="tab-one__content__title">{{ tab.title }}</h3>
                  <div v-for="(box, boxIndex) in tab.boxes" :key="boxIndex" class="tab-one__content__box" :style="{ '--accent-color': box.accentColor }">
                     <div class="tab-one__content__box__icon">
                        <i class="icofont-check-circled"></i>
                     </div>
                     <h3 class="tab-one__content__box__title">{{ box.title }}</h3>
                     <p class="tab-one__content__box__text">{{ box.text }}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
   tab: Object,
   isActive: Boolean,
});
</script>

<style scoped>
/* Add your specific styles here */
</style>
