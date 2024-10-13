<template>
   <section class="about-one" id="about">
      <div class="about-one__shape">
         <img :src="aboutData.shapeImage" alt="careox" />
      </div>
      <div class="container">
         <div class="row">
            <div class="col-xl-6">
               <div class="about-one__image wow fadeInLeft" data-wow-delay="100ms">
                  <div class="about-one__image__one">
                     <img :src="aboutData.images.one" alt="careox" />
                  </div>
                  <div class="about-one__image__two">
                     <img :src="aboutData.images.two" alt="careox" />
                     <div class="about-one__image__video">
                        <NuxtLink href="https://www.youtube.com/watch?v=h9MbznbxlLc" class="video-popup">
                           <i class="icofont-ui-play"></i>
                        </NuxtLink>
                        Always Support Us!
                     </div>
                  </div>
                  <div class="about-one__image__shape-one">
                     <img :src="aboutData.shapeOne" alt="careox" />
                  </div>
                  <div class="about-one__image__shape-two">
                     <img :src="aboutData.shapeTwo" alt="careox" />
                  </div>
                  <div class="about-one__image__shape-three">
                     <img :src="aboutData.shapeThree" alt="careox" />
                  </div>
               </div>
            </div>
            <div class="col-xl-6 wow fadeInRight" data-wow-delay="200ms">
               <div class="about-one__content">
                  <div class="sec-title text-left">
                     <h6 class="sec-title__tagline bw-split-in-right"><span class="sec-title__tagline__border"></span>{{ aboutData.content.tagline }}</h6>
                     <h3 class="sec-title__title bw-split-in-left">{{ aboutData.content.title }}</h3>
                  </div>
                  <p class="about-one__content__text">{{ aboutData.content.text }}</p>
                  <div class="row gutter-y-30">
                     <div class="col-md-6" v-for="(box, index) in aboutData.content.boxes" :key="index">
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
                     <li v-for="(item, index) in aboutData.content.listItems" :key="index">
                        <span class="about-one__content__list__icon">
                           <i class="icofont-check-circled"></i>
                        </span>
                        {{ item.text }}
                        <NuxtLink v-if="item.link" :to="item.link">{{ item.linkText }}</NuxtLink>
                     </li>
                  </ul>
                  <NuxtLink :to="aboutData.content.listItems[0].link" class="careox-btn"><span>About More</span></NuxtLink>
               </div>
            </div>
         </div>
         <div class="about-one__text wow fadeInUp">
            <span>#</span> {{ aboutData.content.donationText }}
            <NuxtLink :to="aboutData.donationLink" class="careox-btn"><span>Donate Now</span></NuxtLink>
         </div>
      </div>
   </section>
</template>

<script setup>
import { aboutData } from "~/data/AboutOne";
onMounted(() => {
   // Initialize GLightbox
   new GLightbox({
      selector: ".video-popup",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
   });
});
</script>

<style scoped>
/* Add any necessary custom styles here */
</style>
