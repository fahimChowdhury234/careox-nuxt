<template>
   <div class="main-slider-three__item">
      <div class="main-slider-three__bg" :style="{ backgroundImage: `url(${slide.backgroundImage})` }"></div>
      <div class="main-slider-three__shape-two">
         <img :src="sliderShapes.shapeTwo" alt="careox" />
      </div>
      <div class="main-slider-three__shape-three">
         <img :src="sliderShapes.shapeThree" alt="careox" />
      </div>
      <div class="main-slider-three__layer" :style="{ backgroundImage: `url(${sliderShapes.shapeLayer})` }">
         <div class="main-slider-three__layer__inner">
            <img :src="slide.layerImage" alt="careox" />
         </div>
      </div>
      <div class="container">
         <div class="row">
            <div class="col-lg-6"></div>
            <div class="col-lg-6 d-flex align-items-center">
               <div class="main-slider-three__content">
                  <div class="main-slider-three__sub-title__wrapper">
                     <h5 class="main-slider-three__sub-title">
                        <img :src="sliderShapes.subTitleImage" alt="careox" />
                        {{ slide.subTitle }}
                     </h5>
                  </div>
                  <div class="main-slider-three__title__wrapper">
                     <h2 class="main-slider-three__title" v-html="slide.title"></h2>
                  </div>
                  <div class="main-slider-three__text__wrapper">
                     <p class="main-slider-three__text">{{ slide.text }}</p>
                  </div>
                  <div class="main-slider-three__btn">
                     <NuxtLink :to="slide.buttonLink" class="careox-btn careox-btn--base">
                        <span>{{ slide.buttonText }}</span>
                     </NuxtLink>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
defineProps({
   slide: Object,
   sliderShapes: Object,
});
</script>
