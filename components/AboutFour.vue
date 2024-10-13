<template>
   <section class="about-four" id="about">
      <div class="about-four__shape">
         <img :src="aboutData.shapeImage" alt="careox" />
      </div>
      <div class="container">
         <div class="row">
            <div class="col-xl-6">
               <!-- Render AboutImage component -->
               <AboutFourImage
                  :mainImage="aboutData.mainImage"
                  :imageOne="aboutData.imageOne"
                  :imageTwo="aboutData.imageTwo"
                  :imageThree="aboutData.imageThree"
                  :experienceText="aboutData.experienceText"
                  :experienceYears="aboutData.experienceYears"
               />
            </div>
            <div class="col-xl-6 wow fadeInRight" data-wow-delay="200ms">
               <!-- Render AboutContent component -->
               <AboutFourContent
                  :title="aboutData.title"
                  :description="aboutData.description"
                  :highlight="aboutData.highlight"
                  :progressPercent="aboutData.progress.percent"
                  :goalAmount="aboutData.progress.goalAmount"
                  :donatedAmount="aboutData.progress.donatedAmount"
                  :buttonLink="aboutData.buttonLink"
                  :buttonText="aboutData.buttonText"
               />
            </div>
         </div>
      </div>
   </section>
</template>
<script setup>
// Import the aboutData from the data file
import { aboutData } from "@/data/AboutFour";
</script>
<style scoped>
/* Add any specific styling related to the entire section here */
</style>
