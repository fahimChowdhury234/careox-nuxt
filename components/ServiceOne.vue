<template>
   <section class="service-one" id="services">
      <div class="service-one__shape-one" :style="{ backgroundImage: `url(${serviceData.shapeOne})` }"></div>
      <div class="service-one__shape-two" :style="{ backgroundImage: `url(${serviceData.shapeTwo})` }"></div>
      <div class="container">
         <div class="sec-title text-center">
            <h6 class="sec-title__tagline bw-split-in-right"><span class="sec-title__tagline__border"></span>OUR BEST SERVICE</h6>
            <h3 class="sec-title__title bw-split-in-left">We Help Poor This Lifes <br />Service Now</h3>
         </div>
         <div class="row gutter-y-30">
            <div v-for="service in serviceData.content" :key="service.id" class="col-lg-3 col-md-6 wow fadeInUp">
               <ServiceItem :item="service" />
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { serviceData } from "~/data/ServiceOne";
</script>

<style scoped></style>
