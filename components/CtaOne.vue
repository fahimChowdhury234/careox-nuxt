<template>
   <section class="cta-one">
      <div class="container-fluid">
         <div class="cta-one__shape-middle" :style="{ backgroundImage: `url(${ctaData[0].shapeImage})` }"></div>
         <div class="row">
            <div class="col-lg-6" v-for="item in ctaData" :key="item.id">
               <div class="cta-one__content" :class="{ 'cta-one__content--right': item.isRightAligned }" :style="{ backgroundImage: `url(${item.backgroundImage})` }">
                  <h3 class="cta-one__title">{{ item.title }}</h3>
                  <p class="cta-one__text" v-html="item.text"></p>
                  <NuxtLink :to="item.buttonLink" class="careox-btn">
                     <span>{{ item.buttonText }}</span>
                  </NuxtLink>
                  <div v-if="item.isRightAligned" class="cta-one__content__shape" :style="{ backgroundImage: `url(${item.shapeImage})` }"></div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { ctaData } from "~/data/CataOne";
</script>

<style scoped>
/* Add any necessary styles here */
</style>
