<template>
   <section class="donations-one">
      <div class="container">
         <div class="sec-title text-center">
            <h6 class="sec-title__tagline bw-split-in-right"><span class="sec-title__tagline__border"></span>Our Popular Causes</h6>
            <h3 class="sec-title__title bw-split-in-left">Help & Donate Now Find <br />The Popular Cause</h3>
         </div>
         <div class="row gutter-y-30">
            <div v-for="(item, index) in donationsData.items" :key="item.id" class="col-lg-4 col-md-6 wow fadeInUp" :data-wow-delay="`${index}00`">
               <DonationThreeItem :item="item" />
            </div>
         </div>
      </div>
   </section>
</template>
<script setup>
import { donationsData } from "@/data/DonationsThree";
</script>
<style scoped></style>
