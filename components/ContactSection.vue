<template>
   <section class="contact-one contact-one--page">
      <div class="contact-one__shape" :style="{ backgroundImage: `url(${contactData.contactShape2})` }"></div>
      <div class="container">
         <div class="row">
            <div class="col-xl-5">
               <div class="contact-one__image">
                  <div class="contact-one__image__shape" :style="{ backgroundImage: `url(${contactData.contactShape1})` }"></div>
                  <img :src="contactData.contactImage" alt="careox" />
                  <div class="contact-one__image__icon">
                     <img :src="contactData.contactIcon" alt="careox" />
                  </div>
                  <div class="contact-one__image__info">
                     <div class="contact-one__image__info__icon">
                        <i class="icofont-phone-circle"></i>
                     </div>
                     <p class="contact-one__image__info__title">{{ contactData.infoTitle }}</p>
                     <p class="contact-one__image__info__text">
                        <NuxtLink :to="`tel:${contactData.phoneNumber}`">{{ contactData.phoneNumber }}</NuxtLink>
                     </p>
                  </div>
               </div>
            </div>
            <div class="col-xl-7">
               <ContactOneForm />
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { contactData } from "@/data/ContactOne";
</script>

<style scoped>
/* Add your styles here */
</style>
