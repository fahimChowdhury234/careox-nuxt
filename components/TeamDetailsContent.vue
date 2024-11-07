<template>
   <section class="team-details">
      <div class="container">
         <div class="row gutter-y-60">
            <div class="col-lg-5">
               <div class="team-details__image">
                  <img :src="teamDetails.image" :alt="teamDetails.name" />
               </div>
               <!-- /.team-details__image -->
            </div>
            <!-- /.col-lg-6 -->
            <div class="col-lg-7">
               <div class="team-details__content">
                  <h3 class="team-details__title">{{ teamDetails.name }}</h3>
                  <div class="team-details__designation">{{ teamDetails.designation }}</div>
                  <div class="team-details__social">
                     <NuxtLink v-for="social in teamDetails.socials" :key="social.platform" :href="social.url" :style="{ '--accent-color': social.color }">
                        <i :class="social.icon" aria-hidden="true"></i>
                        <span class="sr-only">{{ social.platform }}</span>
                     </NuxtLink>
                  </div>
                  <!-- /.team-details__social -->
                  <div class="team-details__text">
                     {{ teamDetails.text }}
                  </div>
                  <ul class="list-unstyled team-details__list">
                     <li v-for="item in teamDetails.list" :key="item">
                        <i class="icofont-check-circled"></i>
                        {{ item }}
                     </li>
                  </ul>
                  <!-- /.team-details__list -->
                  <div
                     v-for="(progress, i) in teamDetails.progress"
                     :key="i"
                     class="team-details__progress"
                     :style="{ '--accent-color': progress.accentColor }"
                     v-observe-visibility="visibilityChanged"
                  >
                     <h4 class="team-details__progress__title">{{ progress.title }}</h4>
                     <div class="team-details__progress__bar">
                        <div class="team-details__progress__inner count-bar" :style="{ width: startCounter ? progress.percent + '%' : '0%' }">
                           <div class="team-details__progress__number count-text d-flex">
                              <count-up :startVal="0" :endVal="startCounter ? progress.percent : 0"></count-up>
                              %
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- /.skills-item -->
               </div>
               <!-- /.team-details__content -->
            </div>
            <!-- /.col-lg-6 -->
         </div>
         <!-- /.row -->
      </div>
      <!-- /.container -->
   </section>
   <!-- /.team-details -->
</template>

<script setup>
import { teamDetails } from "@/data/TeamDetails";
// const teamDetails = ref(teamDetails);
import CountUp from "vue-countup-v3";
const startCounter = ref(false);
const visibilityChanged = (isVisible, entry) => {
   if (isVisible) {
      startCounter.value = true;
   }
};
</script>

<style scoped>
/* Add any scoped styles if necessary */
</style>
