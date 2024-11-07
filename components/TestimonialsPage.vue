<template>
   <section class="testimonials-page">
      <div class="container">
         <div class="row gutter-y-30">
            <div v-for="testimonial in testimonials" :key="testimonial.id" class="col-md-6 wow fadeInUp">
               <TestimonialsPageCard :testimonial="testimonial" />
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { testimonialsData } from "@/data/Testimonials";

const testimonials = testimonialsData;
</script>

<style scoped>
/* Add your styles here */
</style>
