<template>
   <div class="about-four__image wow fadeInLeft" data-wow-delay="100ms">
      <img :src="mainImage" alt="careox" />
      <div class="about-four__image__one">
         <img :src="imageOne" alt="careox" />
      </div>
      <div class="about-four__image__two">
         <img :src="imageTwo" alt="careox" />
      </div>
      <div class="about-four__image__three">
         <img :src="imageThree" alt="careox" />
         <div class="about-four__image__text">
            <span>{{ experienceText }}</span>
            {{ experienceYears }}
         </div>
      </div>
   </div>
</template>

<script setup>
// Props for dynamic data
const props = defineProps({
   mainImage: String,
   imageOne: String,
   imageTwo: String,
   imageThree: String,
   experienceText: String,
   experienceYears: String,
});
</script>

<style scoped>
/* Add any specific styling related to the image section here */
</style>
