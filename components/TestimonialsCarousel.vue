<template>
   <section class="testimonials-two" id="testimonials">
      <div class="testimonials-two__shape-one" :style="{ backgroundImage: `url(${shapes.TestilShape1})` }"></div>
      <div class="testimonials-two__shape-two" :style="{ backgroundImage: `url(${shapes.TestilShape2})` }"></div>
      <div class="testimonials-two__shape-three" :style="{ backgroundImage: `url(${shapes.TestilShape3})` }"></div>
      <div class="testimonials-two__shape-four" :style="{ backgroundImage: `url(${shapes.TestilShape4})` }"></div>
      <div class="container">
         <div class="sec-title text-center">
            <h6 class="sec-title__tagline">Our testimonials</h6>
            <h3 class="sec-title__title">What They’re Saying</h3>
         </div>

         <div class="testimonials-two__wrapper">
            <div class="testimonials-two__carousel-thumb">
               <Splide aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel" :options="thumbsOptions" ref="thumbs" class="thumbnail-carousel">
                  <SplideSlide v-for="(slide, index) in testimonialsData" :key="index">
                     <div class="testimonials-two__meta-thumb">
                        <img :src="slide.image" alt="careox" />
                     </div>
                  </SplideSlide>
               </Splide>
            </div>

            <div class="testimonials-two__carousel">
               <Splide aria-labelledby="thumbnail-example-heading" :options="mainOptions" ref="main">
                  <SplideSlide v-for="(slide, index) in testimonialsData" :key="index">
                     <div class="testimonials-two__item">
                        <h5 class="testimonials-two__item__name">{{ slide.name }}</h5>
                        <span class="testimonials-two__item__designation">{{ slide.designation }}</span>
                        <div class="testimonials-two__item__quote" v-html="slide.quote"></div>

                        <div class="testimonials-two__item__ratings">
                           <i class="icofont-star" v-for="r in slide.rating" :key="r"></i>
                        </div>
                     </div>
                     <!-- /.testimonials-card -->
                  </SplideSlide>
               </Splide>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { testimonialsData, shapes } from "~/data/TestimonialsTwo";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

const main = ref(null);
const thumbs = ref(null);

const mainOptions = {
   type: "loop",
   perPage: 1,
   perMove: 1,
   fixedHeight: 245,
   pagination: false,
   arrows: false,
   cover: true,
   autoplay: true,
   interval: 2000,
   pauseOnHover: true,
   height: "652px",
   drag: false,
};

const thumbsOptions = {
   type: "loop",
   perPage: 3,
   perMove: 1,
   rewind: true,
   fixedWidth: 70,
   arrows: true,
   fixedHeight: 58,
   isNavigation: true,
   gap: 0,
   focus: "center",
   pagination: false,
   cover: true,
   dragMinThreshold: {
      mouse: 2,
      touch: 10,
   },
   breakpoints: {
      640: {
         fixedWidth: 66,
         fixedHeight: 38,
      },
   },
};

onMounted(() => {
   const thumbsSplide = thumbs.value?.splide;

   if (thumbsSplide) {
      main.value?.sync(thumbsSplide);
   }
});
</script>

<style scoped>
.testimonials-two__carousel-thumb .splide__slide {
   height: auto !important;
}
.testimonials-one__image .splide__track--nav > .splide__list > .splide__slide {
   height: auto !important;
}
</style>
