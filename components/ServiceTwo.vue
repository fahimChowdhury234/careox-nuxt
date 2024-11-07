<template>
   <section class="service-two" id="services">
      <div class="service-two__shape" :style="{ backgroundImage: `url(${serviceData.shapeBackground})` }"></div>
      <div class="container">
         <div class="sec-title text-center">
            <h6 class="sec-title__tagline bw-split-in-right">
               <span class="sec-title__tagline__border"></span>
               {{ serviceData.sectionTitle }}
            </h6>
            <h3 class="sec-title__title bw-split-in-left" v-html="serviceData.sectionMainTitle"></h3>
         </div>
         <div class="row gutter-y-30">
            <ServiceTwoItem v-for="(service, index) in serviceData.services" :key="index" :service="service" />
         </div>
      </div>
   </section>
</template>

<script setup>
import { serviceData } from "@/data/ServiceTwo";
</script>

<style scoped>
/* Add specific styles for the service section */
</style>
