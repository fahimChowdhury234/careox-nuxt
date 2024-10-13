<template>
   <div class="about-three__content">
      <div class="sec-title text-left">
         <h6 class="sec-title__tagline bw-split-in-right">
            <span class="sec-title__tagline__border"></span>
            {{ contentData.tagline }}
         </h6>
         <h3 class="sec-title__title bw-split-in-left">
            {{ contentData.title }}
         </h3>
      </div>
      <p class="about-three__content__text">{{ contentData.text }}</p>
      <ul class="about-three__content__list">
         <li v-for="(item, index) in contentData.list" :key="index">
            <span class="about-three__content__list__icon">
               <i :class="item.icon"></i>
            </span>
            {{ item.text }}
            <a v-if="item.link" :href="item.link">Responsibility</a>
         </li>
      </ul>
      <div class="row gutter-y-30">
         <div v-for="(box, index) in contentData.boxes" :key="index" class="col-md-6">
            <div class="about-three__content__box" :style="{ '--accent-color': box.color }">
               <div class="about-three__content__box__icon">
                  <span :class="box.icon"></span>
               </div>
               <h5 class="about-three__content__box__title">{{ box.title }}</h5>
            </div>
         </div>
      </div>
      <p class="about-three__content__text-two">{{ contentData.textTwo }}</p>
      <NuxtLink :to="contentData.buttonLink" class="careox-btn">
         <span>{{ contentData.buttonText }}</span>
      </NuxtLink>
   </div>
</template>

<script setup>
import { contentData } from "@/data/AboutThree";
</script>

<style scoped>
/* Add your styles here */
</style>
