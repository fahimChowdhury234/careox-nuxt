<template>
   <section class="donate-two">
      <div class="container">
         <div class="sec-title text-center">
            <h6 class="sec-title__tagline bw-split-in-right"><span class="sec-title__tagline__border"></span>Make Donate</h6>
            <h3 class="sec-title__title bw-split-in-left">Become a Donate Now</h3>
         </div>

         <div class="donate-two__inner">
            <div class="row">
               <div class="col-lg-6">
                  <div class="donate-two__content">
                     <h4 class="donate-two__title">{{ donateContent.title }}</h4>
                     <div class="donate-two__text">
                        <span>{{ donateContent.donationNotice }}</span> {{ donateContent.text }}
                     </div>
                     <h5 class="donate-two__donate-title">{{ donateContent.donationTitle }}</h5>
                     <DonateTwoForm :defaultAmount="donateContent.defaultAmount" :amounts="donateContent.donationAmounts" :arrow="donateContent.arrow" />
                  </div>
               </div>
               <div class="col-lg-6">
                  <div class="donate-two__image">
                     <img :src="donateContent.image" alt="Donate" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { donateContent } from "@/data/DonateTwo";
</script>

<style scoped>
/* Add your styles here */
</style>
