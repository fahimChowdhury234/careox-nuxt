<template>
   <section class="about-one about-one--about">
      <div class="container">
         <div class="row">
            <div class="col-xl-6">
               <div class="about-one__image wow fadeInLeft" data-wow-delay="100ms">
                  <div class="about-one__image__one">
                     <img :src="mainImageOne" alt="careox" />
                  </div>
                  <div class="about-one__image__two">
                     <img :src="mainImageTwo" alt="careox" />
                     <div class="about-one__image__video">
                        <a :href="videoLink" class="video-popup">
                           <i class="icofont-ui-play"></i>
                        </a>
                        Always Support Us!
                     </div>
                  </div>
                  <div class="about-one__image__shape-two">
                     <img :src="shapeTwo" alt="careox" />
                  </div>
                  <div class="about-one__image__shape-three">
                     <img :src="shapeThree" alt="careox" />
                  </div>
               </div>
            </div>

            <div class="col-xl-6 wow fadeInRight" data-wow-delay="200ms">
               <div class="about-one__content">
                  <div class="sec-title text-left">
                     <h6 class="sec-title__tagline bw-split-in-right"><span class="sec-title__tagline__border"></span>{{ sectionTitle.tagline }}</h6>
                     <h3 class="sec-title__title bw-split-in-left">{{ sectionTitle.title }}</h3>
                  </div>

                  <p class="about-one__content__text">{{ content.text }}</p>

                  <div class="row gutter-y-30">
                     <div class="col-md-6" v-for="(box, index) in content.boxes" :key="index">
                        <div class="about-one__content__box" :style="{ '--accent-color': box.accentColor }">
                           <div class="about-one__content__box__top">
                              <div class="about-one__content__box__icon">
                                 <span :class="box.icon"></span>
                              </div>
                              <h5 class="about-one__content__box__title">{{ box.title }}</h5>
                           </div>
                           <p class="about-one__content__box__text">
                              <span class="about-one__content__box__text__icon">
                                 <i class="icofont-check-circled"></i>
                              </span>
                              {{ box.text }}
                           </p>
                        </div>
                     </div>
                  </div>

                  <div class="about-one__content__border"></div>

                  <ul class="about-one__content__list">
                     <li v-for="(item, index) in content.list" :key="index">
                        <span class="about-one__content__list__icon">
                           <i :class="item.icon"></i>
                        </span>
                        <span v-html="item.text"></span>
                     </li>
                  </ul>

                  <NuxtLink to="/about" class="careox-btn"><span>About More</span></NuxtLink>
               </div>
            </div>
         </div>

         <div class="about-one__text wow fadeInUp">
            <span>#</span>
            {{ content.finalText }}
            <NuxtLink to="/donate" class="careox-btn"><span>Donate Now</span></NuxtLink>
         </div>
      </div>
   </section>
</template>

<script setup>
import { aboutData } from "~/data/About.js";

const { sectionTitle, content, images } = aboutData;
const { mainImageOne, mainImageTwo, videoLink, shapeTwo, shapeThree } = images;
</script>

<style scoped>
/* Add any component-specific styles if needed */
</style>
