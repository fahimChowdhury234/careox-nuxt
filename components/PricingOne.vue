<template>
   <section :class="`pricing-one ${exClass}`" id="pricing">
      <div class="container">
         <div class="sec-title text-center">
            <h6 class="sec-title__tagline bw-split-in-right"><span class="sec-title__tagline__border"></span>OUR PRICING PLAN</h6>
            <h3 class="sec-title__title bw-split-in-left">
               The Terms and Conditions <br />
               Select Your Plan
            </h3>
         </div>
         <div class="row gutter-y-30">
            <div v-for="(plan, index) in pricingPlans" :key="index" class="col-md-12 col-xl-4 wow fadeInUp" :style="{ '--accent-color': plan.accentColor }" :data-wow-delay="`${index * 100}ms`">
               <PricingOneCard :pricingData="plan" />
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { pricingPlans } from "~/data/PricingOne";
defineProps({
   exClass: String,
});
</script>

<style scoped>
/* Add specific styles here if necessary */
</style>
