<template>
   <div class="pricing-one__card text-center" :style="{ '--accent-color': pricingData.accentColor }">
      <div class="pricing-one__card__top">
         <div class="pricing-one__card__top__bg" :style="{ backgroundImage: `url(${pricingData.image})` }"></div>
         <div class="pricing-one__card__icon">
            <i :class="pricingData.icon"></i>
         </div>
         <h4 class="pricing-one__card__title">{{ pricingData.title }}</h4>
         <h3 class="pricing-one__card__price">
            ${{ pricingData.price }}<span>/{{ pricingData.period }}</span>
         </h3>
      </div>
      <ul class="list-unstyled pricing-one__card__list">
         <li v-for="(feature, index) in pricingData.features" :key="index">
            <i :class="feature.available ? 'icofont-check-circled' : 'icofont-close-line'"></i>
            {{ feature.text }}
         </li>
      </ul>
      <NuxtLink :to="pricingData.link" class="careox-btn"><span>Get Started</span></NuxtLink>
   </div>
</template>

<script setup>
defineProps({
   pricingData: {
      type: Object,
      required: true,
   },
});
</script>

<style scoped>
/* Add component-specific styles here if necessary */
</style>
