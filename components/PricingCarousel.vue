<template>
   <section class="pricing-one pricing-one--page">
      <div class="container">
         <div class="sec-title text-center">
            <h6 class="sec-title__tagline bw-split-in-right"><span class="sec-title__tagline__border"></span>OUR PRICING PLAN</h6>
            <!-- /.sec-title__tagline -->

            <h3 class="sec-title__title bw-split-in-left">
               The Terms and Conditions<br />
               Select Your Plan
            </h3>
            <!-- /.sec-title__title -->
         </div>
         <!-- /.sec-title -->
         <div class="testimonials-page__carousel">
            <client-only>
               <div ref="slider" class="my-slider">
                  <div class="slide" v-for="(plan, index) in pricingPlans" :key="index">
                     <PricingOneCard :pricingData="plan" />
                  </div>
               </div>
            </client-only>
         </div>
      </div>
   </section>
</template>

<script setup>
import { pricingPlans } from "~/data/PricingCarousel";

const slider = ref(null);

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
            500: { items: 2 },
            992: { items: 3 },
         },
      });
   }
});
</script>

<style lang="scss" scoped></style>
