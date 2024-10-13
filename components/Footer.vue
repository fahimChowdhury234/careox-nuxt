<template>
   <footer class="main-footer background-black">
      <div class="main-footer__bg background-black" :style="{ backgroundImage: `url(${footerData.bgImage})` }"></div>
      <Newsletter :newsletterData="footerData.newsletter" />
      <!-- Company Info & Services Section -->
      <div class="container">
         <div class="row">
            <!-- Company Info -->
            <div class="col-md-6 col-xl-4">
               <div class="footer-widget footer-widget--about">
                  <NuxtLink to="/" class="footer-widget__logo">
                     <img :src="footerData.companyInfo.logo" width="223" alt="Logo" />
                  </NuxtLink>
                  <p class="footer-widget__text">{{ footerData.companyInfo.description }}</p>
                  <div class="footer-widget__box">
                     <div class="footer-widget__box__icon"><i class="icon-phone-call"></i></div>
                     <p class="footer-widget__box__text">
                        {{ footerData.companyInfo.hotline.text }}
                        <NuxtLink :to="footerData.companyInfo.hotline.phoneUrl">
                           {{ footerData.companyInfo.hotline.phone }}
                        </NuxtLink>
                     </p>
                  </div>
               </div>
            </div>

            <!-- Services -->
            <div class="col-md-6 col-xl-2">
               <div class="footer-widget footer-widget--links">
                  <h2 class="footer-widget__title">Service</h2>
                  <ul class="list-unstyled footer-widget__links">
                     <li v-for="(service, index) in footerData.services" :key="index">
                        <NuxtLink :to="service.url">{{ service.title }}</NuxtLink>
                     </li>
                  </ul>
               </div>
            </div>

            <!-- Quick Links -->
            <div class="col-md-6 col-xl-3">
               <div class="footer-widget footer-widget--links-two">
                  <h2 class="footer-widget__title">Quick Link</h2>
                  <ul class="list-unstyled footer-widget__links">
                     <li v-for="(link, index) in footerData.quickLinks" :key="index">
                        <NuxtLink :to="link.url">{{ link.title }}</NuxtLink>
                     </li>
                  </ul>
               </div>
            </div>

            <!-- Contact Info -->
            <div class="col-md-6 col-xl-3">
               <div class="footer-widget footer-widget--contact">
                  <h2 class="footer-widget__title">Contact Info</h2>
                  <ul class="list-unstyled footer-widget__info">
                     <li v-for="(contact, index) in footerData.contactInfo" :key="index" :style="{ '--accent-color': contact.accentColor }">
                        <span class="footer-widget__info__icon"><i :class="contact.icon"></i></span>
                        <span v-if="contact.link">
                           <NuxtLink :to="contact.link">{{ contact.text }}</NuxtLink>
                        </span>
                        <span v-else>{{ contact.text }}</span>
                     </li>
                  </ul>

                  <!-- Social Links -->
                  <div class="footer-widget__social">
                     <a v-for="(social, index) in footerData.socialLinks" :key="index" :href="social.url" :style="{ '--accent-color': social.accentColor }">
                        <i :class="social.icon"></i>
                        <span class="sr-only">{{ social.platform }}</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <!-- Footer Bottom -->
      <div class="main-footer__bottom">
         <div class="container">
            <div class="main-footer__bottom__inner">
               <p class="main-footer__copyright">{{ footerData.copyrightText }}</p>
            </div>
         </div>
      </div>
   </footer>
</template>

<script setup>
import { footerData } from "~/data/Footer.js";
</script>

<style scoped>
/* Add your styles here */
</style>
