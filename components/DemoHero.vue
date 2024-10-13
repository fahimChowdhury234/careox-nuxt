<template>
   <section class="hero-section">
      <div class="hero-section__bg" :style="{ backgroundImage: `url(${heroSectionData.background})` }"></div>
      <div class="container">
         <div class="hero-section__content">
            <h1 class="hero-section__title">{{ heroSectionData.title }}</h1>
            <p class="hero-section__text">{{ heroSectionData.text }}</p>
            <a v-for="(link, index) in heroSectionData.links" :key="index" :href="link.href" :target="link.target" class="careox-btn">
               <span>{{ link.text }}</span>
            </a>
         </div>
      </div>
      <div class="hero-section__images">
         <img
            v-for="(image, index) in heroSectionData.images"
            :key="index"
            :src="image.src"
            :alt="image.alt"
            :width="image.width"
            :height="image.height"
            class="wow fadeInRight"
            :data-wow-delay="image.delay"
         />
      </div>
   </section>
</template>

<script setup>
import { heroSectionData } from "@/data/DemoHero";
</script>

<style scoped>
/* Add your styling here */
</style>
