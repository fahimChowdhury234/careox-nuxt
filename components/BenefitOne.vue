<!-- ~/components/BenefitSection.vue -->

<template>
   <section class="benefit-one">
      <div class="container">
         <div class="row">
            <!-- Benefit Content -->
            <div class="col-lg-6">
               <div class="benefit-one__content wow fadeInLeft">
                  <div class="sec-title text-left">
                     <h6 class="sec-title__tagline bw-split-in-right"><span class="sec-title__tagline__border"></span>{{ benefitsContent.tagline }}</h6>
                     <h3 class="sec-title__title bw-split-in-left">{{ benefitsContent.title }}</h3>
                  </div>
                  <p class="benefit-one__content__text">{{ benefitsContent.description }}</p>
                  <div class="row gutter-y-30">
                     <div v-for="(image, index) in benefitsContent.images" :key="index" class="col-md-6 wow fadeInUp" :data-wow-delay="`${(index + 1) * 100}ms`">
                        <div class="benefit-one__content__image">
                           <img :src="image" alt="benefit image" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <!-- Benefit Facts -->
            <div class="col-lg-6">
               <ul class="benefit-one__right wow fadeInRight" data-wow-delay="100ms">
                  <li v-for="(fact, index) in facts" :key="index" class="benefit-one__fact count-box" :style="{ '--accent-color': fact.accentColor }" v-observe-visibility="visibilityChanged">
                     <div class="benefit-one__fact__bg" :style="{ backgroundImage: `url(${fact.image})` }"></div>
                     <div class="benefit-one__fact__icon">
                        <i :class="fact.icon"></i>
                     </div>
                     <h3 class="benefit-one__fact__count">
                        <count-up :startVal="0" :endVal="startCounter ? fact.count : 0"></count-up>
                        {{ fact.suffix }}
                     </h3>
                     <p class="benefit-one__fact__text">{{ fact.text }}</p>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { benefitsContent, facts } from "~/data/BenefitOne";
import CountUp from "vue-countup-v3";
const startCounter = ref(false);
const visibilityChanged = (isVisible, entry) => {
   if (isVisible) {
      startCounter.value = true;
   }
};
</script>

<style scoped>
/* Add your specific styles for the benefit section here */
</style>
