<template>
   <div class="donations-two__item wow fadeInUp" :style="{ '--accent-color': item.accentColor }">
      <div class="donations-two__item__image">
         <img :src="item.image" :alt="item.title" />
         <div class="donations-two__item__btn">
            <NuxtLink :to="item.videoUrl" class="video-popup"><i class="icofont-video-cam"></i></NuxtLink>
         </div>
         <NuxtLink :to="item.detailsUrl" class="donations-two__item__rm">
            <i class="icon-right-arrow"></i>
         </NuxtLink>
      </div>
      <div class="donations-two__item__content">
         <h3 class="donations-two__item__title">
            <NuxtLink :to="item.detailsUrl">{{ item.title }}</NuxtLink>
         </h3>
         <div class="donations-two__item__category">{{ item.category }}</div>
         <div class="donations-two__item__bottom">
            <div class="donations-two__item__bottom__progress" v-observe-visibility="visibilityChanged">
               <div class="donations-two__item__bottom__progress__inner count-bar" :style="{ width: startCounter ? item.progress + '%' : '0%' }">
                  <div class="donations-two__item__bottom__progress__number count-text">
                     <count-up :startVal="0" :endVal="startCounter ? item.progress : 0"></count-up>
                     %
                  </div>
               </div>
            </div>
            <div class="donations-two__item__bottom__text">
               <span>{{ item.goal }} Goals</span>
               <span>{{ item.donated }} Donate</span>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import CountUp from "vue-countup-v3";
defineProps({
   item: {
      type: Object,
      required: true,
   },
});
const startCounter = ref(false);

const visibilityChanged = (isVisible, entry) => {
   if (isVisible) {
      startCounter.value = true;
   }
};
onMounted(() => {
   new GLightbox({
      selector: ".video-popup",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
   });
});
</script>

<style scoped></style>
