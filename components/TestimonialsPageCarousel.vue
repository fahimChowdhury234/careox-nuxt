<template>
   <section class="testimonials-page">
      <div class="container">
         <div class="testimonials-page__carousel">
            <client-only>
               <div ref="slider" class="my-slider">
                  <div class="slide" v-for="testimonial in testimonials" :key="testimonial.id">
                     <TestimonialsPageCard :testimonial="testimonial" />
                  </div>
               </div>
            </client-only>
         </div>
      </div>
   </section>
</template>

<script setup>
import { testimonialsData } from "@/data/Testimonials";
const slider = ref(null);

const testimonials = testimonialsData;
onMounted(async () => {
   if (typeof window !== "undefined") {
      const { tns } = await import("tiny-slider/src/tiny-slider");
      tns({
         container: slider.value,
         loop: true,
         autoplay: false,
         gutter: 30,
         mouseDrag: true,
         preventScrollOnTouch: "auto",
         nav: true,
         autoplayButtonOutput: false,
         controls: false,
         dots: true,
         navPosition: "bottom",
         autoplayTimeout: 6000,
         speed: 1000,
         responsive: {
            0: { items: 1 },
            768: { items: 2 },
         },
      });
   }
});
</script>

<style lang="scss" scoped></style>
