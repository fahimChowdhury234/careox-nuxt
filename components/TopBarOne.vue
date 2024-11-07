<template>
   <div class="topbar-one">
      <div class="container">
         <div class="topbar-one__inner">
            <p class="topbar-one__info">
               {{ topbarData.welcomeText }} <span>{{ topbarData.companyName }}!</span>
            </p>
            <div class="topbar-one__social">
               <p class="topbar-one__social__text">Visit our social pages:</p>
               <a v-for="social in topbarData.socialLinks" :key="social.platform" :href="social.url" :style="{ '--accent-color': social.color }">
                  <i :class="social.iconClass" aria-hidden="true"></i>
                  <span class="sr-only">{{ social.platform }}</span>
               </a>
            </div>
         </div>
      </div>
      <div class="topbar-one__bottom">
         <div class="container">
            <div class="topbar-one__bottom__inner">
               <div class="topbar-one__bottom__logo">
                  <NuxtLink to="/">
                     <img :src="topbarData.logoWhite" alt="Careox HTML" width="223" v-if="isDark" />
                     <img :src="topbarData.logoDark" alt="Careox HTML" width="223" v-else />
                  </NuxtLink>
               </div>
               <div class="topbar-one__bottom__right">
                  <div v-for="(info, index) in topbarData.contactInfo" :key="index" class="topbar-one__bottom__info" :style="{ '--accent-color': info.color }">
                     <div class="topbar-one__bottom__info__icon">
                        <span :class="info.iconClass"></span>
                     </div>
                     <div class="topbar-one__bottom__info__content">
                        <h5 class="topbar-one__bottom__info__text">
                           <a v-if="info.link" :href="info.link">{{ info.text }}</a>
                           <span v-else>{{ info.text }}</span>
                        </h5>
                        <p class="topbar-one__bottom__info__title">{{ info.subtitle }}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="topbar-one__bottom__button">
            <img :src="topbarData.arrowImage" alt="careox" />
            <NuxtLink :to="topbarData.donateButton.url" class="careox-btn">
               <span><i :class="topbarData.donateButton.iconClass"></i>{{ topbarData.donateButton.text }}</span>
            </NuxtLink>
         </div>
      </div>
   </div>
</template>

<script setup>
import { topbarData } from "@/data/TopBarOne";
defineProps({
   isDark: Boolean,
});
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>
