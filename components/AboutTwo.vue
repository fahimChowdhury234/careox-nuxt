<template>
   <section class="about-two" id="about">
      <div class="about-two__shape">
         <img :src="aboutData.shapeImage" alt="about shape" />
      </div>
      <div class="container">
         <div class="row">
            <!-- Left side: Image Section -->
            <div class="col-lg-6">
               <div class="about-two__image wow fadeInLeft" data-wow-delay="100ms">
                  <img :src="aboutData.mainImage" alt="about image" />
                  <div class="about-two__image__text">
                     <NuxtLink :to="aboutData.videoLink" class="video-popup">
                        <i class="icofont-ui-play"></i>
                     </NuxtLink>
                     {{ aboutData.videoText }}
                  </div>
                  <div class="about-two__image__left wow fadeInUp" data-wow-delay="200ms">
                     <img :src="aboutData.secondaryImage" alt="secondary image" />
                  </div>
                  <div class="about-two__image__shape-one">
                     <img :src="aboutData.shapeOne" alt="shape one" />
                  </div>
                  <div class="about-two__image__shape-two">
                     <img :src="aboutData.shapeTwo" alt="shape two" />
                  </div>
               </div>
            </div>

            <!-- Right side: Content Section -->
            <div class="col-lg-6 wow fadeInRight" data-wow-delay="200ms">
               <div class="about-two__content">
                  <div class="sec-title text-left">
                     <h6 class="sec-title__tagline bw-split-in-right"><span class="sec-title__tagline__border"></span>{{ aboutData.sectionTitle }}</h6>
                     <h3 class="sec-title__title bw-split-in-left">{{ aboutData.sectionMainTitle }}</h3>
                  </div>
                  <p class="about-two__content__text">{{ aboutData.description }}</p>

                  <!-- Donate Items Section -->
                  <div class="about-two__wrapper">
                     <div class="row gutter-y-30">
                        <AboutTwoItem v-for="(item, index) in aboutData.donateItems" :key="index" :item="item" />
                     </div>
                  </div>

                  <!-- Author Section -->
                  <div class="about-two__author wow fadeInUp" data-wow-delay="300ms">
                     <div class="about-two__author__left">
                        <div class="about-two__author__image">
                           <img :src="aboutData.author.image" alt="author image" />
                        </div>
                        <div class="about-two__author__content">
                           <h5 class="about-two__author__name">{{ aboutData.author.name }}</h5>
                           <p class="about-two__author__designation">{{ aboutData.author.designation }}</p>
                        </div>
                     </div>
                     <img :src="aboutData.author.signImage" alt="author sign" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { aboutData } from "@/data/AbourTwo";
</script>

<style scoped>
/* Add any specific styles here */
</style>
