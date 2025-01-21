<template>
   <section class="video-two">
      <div class="container">
         <div class="container">
            <div class="video-two__wrapper wow fadeInRight">
               <div class="row">
                  <!-- Text content -->
                  <div class="col-lg-7 d-flex align-items-center">
                     <div class="video-two__content">
                        <h5 class="video-two__title">{{ videoSectionData?.title || 'Default Title' }}</h5>
                        <ul class="video-two__list">
                           <li v-for="(item, index) in videoSectionData?.list || []" :key="index">
                              <span class="video-two__list__icon">
                                 <i :class="item.icon"></i>
                              </span>
                              {{ item.text }}
                              <NuxtLink v-if="item.link" :to="item.link">{{ item.linkText }}</NuxtLink>
                              <span v-if="item.link">+</span>
                           </li>
                        </ul>
                     </div>
                  </div>

                  <!-- Video content -->
                  <div class="col-lg-5">
                     <div class="video-two__image">
                        <img :src="videoSectionData?.videoImage || ''" alt="careox" />
                        <NuxtLink :to="videoSectionData?.videoLink || '#'" class="video-popup">
                           <i class="icon-play-button"></i>
                           <i class="ripple"></i>
                        </NuxtLink>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { onMounted } from "vue";
import { videoSectionData } from "@/data/VideoTwo";

onMounted(() => {
   if (process.client) {
      new GLightbox({
         selector: ".video-popup",
         touchNavigation: true,
         loop: true,
         autoplayVideos: true,
      });
   }
});
</script>
