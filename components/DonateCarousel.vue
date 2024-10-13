<template>
   <div class="donations-one__carousel careox-owl__carousel owl-carousel">
      <client-only>
         <div ref="slider" class="my-slider">
            <div class="slide" v-for="(item, index) in carouselItems" :key="index">
               <div class="donations-one__item" :style="`--accent-color: ${item.color};`">
                  <div class="donations-one__item__image">
                     <img :src="item.image" :alt="item.alt" />
                     <a :href="item.link" class="donations-one__item__image__link"></a>
                     <div class="donations-one__item__category">{{ item.category }}</div>
                  </div>
                  <div class="donations-one__item__content">
                     <h3 class="donations-one__item__title">
                        <a :href="item.link">{{ item.title }}</a>
                     </h3>
                     <p class="donations-one__item__text">{{ item.text }}</p>
                     <a :href="item.link" class="donations-one__item__rm"><i class="icon-right-arrow"></i></a>
                  </div>
                  <div class="donations-one__item__bottom">
                     <div class="donations-one__item__bottom__progress" v-observe-visibility="visibilityChanged">
                        <div class="donations-one__item__bottom__progress__inner count-bar" :style="{ width: startCounter ? item.percent + '%' : '0%' }">
                           <div class="donations-one__item__bottom__progress__number count-text">
                              <count-up :startVal="0" :endVal="startCounter ? item.percent : 0"></count-up>
                              %
                           </div>
                        </div>
                     </div>
                     <div class="donations-one__item__bottom__text">
                        <span>{{ item.goal }}</span>
                        <span>{{ item.donate }}</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </client-only>
   </div>
</template>

<script setup>
import { carouselItems } from "@/data/Donate";
import CountUp from "vue-countup-v3";
const startCounter = ref(false);
const visibilityChanged = (isVisible, entry) => {
   if (isVisible) {
      startCounter.value = true;
   }
};
const slider = ref(null);
onMounted(async () => {
   if (typeof window !== "undefined") {
      const { tns } = await import("tiny-slider/src/tiny-slider");
      tns({
         container: slider.value,
         mode: "carousel",
         loop: false,
         autoplay: false,
         items: 1,
         gutter: 0,
         preventScrollOnTouch: "auto",
         nav: false,
         mouseDrag: true,
         controls: false,

         autoplayButtonOutput: false,
         dots: false,
         autoplayTimeout: 6000,
         speed: 1000,
      });
   }
});
</script>

<style scoped>
/* Add carousel styling here */
</style>
