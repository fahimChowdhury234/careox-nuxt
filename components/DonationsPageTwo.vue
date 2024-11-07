<template>
   <section class="donations-one">
      <div class="container">
         <div class="sec-title text-center">
            <h6 class="sec-title__tagline bw-split-in-right"><span class="sec-title__tagline__border"></span>Our Popular Causes</h6>
            <h3 class="sec-title__title bw-split-in-left">Help & Donate Now Find <br />The Popular Cause</h3>
         </div>
         <div class="row gutter-y-30">
            <div v-for="(donation, index) in donationData.causes" :key="index" class="col-lg-4 col-md-6 wow fadeInUp" :data-wow-delay="donation.delay">
               <DonationTwoItem :item="donation" />
            </div>
         </div>
      </div>
   </section>
</template>
<script setup>
// import { donations } from "@/data/Donations";
import { donationsTwoData } from "@/data/DonationsTwo";

const donationData = donationsTwoData;
</script>
<style scoped></style>
