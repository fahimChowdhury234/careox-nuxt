<!-- ~/components/VolunteerSection.vue -->

<template>
   <section class="volunteer">
      <div class="container">
         <div class="row">
            <div class="col-xl-5 d-flex align-items-center">
               <div class="volunteer__content">
                  <div class="sec-title text-left">
                     <h6 class="sec-title__tagline bw-split-in-right">
                        <span class="sec-title__tagline__border"></span>
                        {{ volunteersContent.tagline }}
                     </h6>
                     <h3 class="sec-title__title bw-split-in-left" v-html="volunteersContent.title"></h3>
                  </div>
                  <p class="volunteer__content__text">{{ volunteersContent.description }}</p>
                  <NuxtLink to="/contact" class="careox-btn"><span>Join With Us</span></NuxtLink>
               </div>
            </div>
            <div class="col-xl-7">
               <div class="volunteer__area">
                  <VolunteerOneItem v-for="(volunteer, index) in volunteers" :key="index" :volunteer="volunteer" :centered="index === 0" />
                  <div class="volunteer__area__border" :style="{ backgroundImage: `url(${volunteersContent.bg})` }"></div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { volunteersContent, volunteers } from "~/data/volunteersOne";
</script>

<style scoped>
/* Add necessary scoped styles here */
</style>
