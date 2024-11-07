<template>
   <div>
      <section class="testimonials-one">
         <div class="testimonials-one__bg" :style="{ backgroundImage: `url(${testimonialsData.testimonialBgShape})` }"></div>
         <div class="container">
            <div class="row">
               <div class="col-lg-6">
                  <div class="sec-title text-left">
                     <h6 class="sec-title__tagline bw-split-in-right"><span class="sec-title__tagline__border"></span>Our testimonials</h6>
                     <!-- /.sec-title__tagline -->

                     <h3 class="sec-title__title bw-split-in-left">What They’re Talking <br />About Company?</h3>
                     <!-- /.sec-title__title -->
                  </div>
                  <!-- /.sec-title -->
                  <p class="testimonials-one__text">
                     Poor address a range of simply application and infrastructure this<br />
                     of passages of available, but the majority have suffered poor<br />
                     alteration in some form.
                  </p>
                  <div class="testimonials-one__image">
                     <Splide aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel" :options="thumbsOptions" ref="thumbs" class="thumbnail-carousel">
                        <SplideSlide v-for="(slide, index) in testimonialsData.testimonials" :key="index">
                           <div class="testimonials-one__image__item" :style="{ '--accent-color': slide.accentColor }">
                              <img :src="slide.image" alt="careox" />
                           </div>
                        </SplideSlide>
                     </Splide>
                  </div>
               </div>

               <div class="col-lg-6">
                  <div class="testimonials-one__wrapper" :style="{ backgroundImage: `url(${testimonialsData.testimonialBg})` }">
                     <Splide aria-labelledby="thumbnail-example-heading" :options="mainOptions" ref="main" class="testimonials-one__carousel">
                        <SplideSlide v-for="(slide, index) in testimonialsData.testimonials" :key="index">
                           <!-- <img :src="slide.image" :alt="slide.alt" /> -->
                           <div class="testimonials-card @@extraClassName" :style="{ '--accent-color': slide.accentColor }">
                              <div class="testimonials-card__image">
                                 <img :src="slide.image" alt="Jack Turpin" />
                              </div>
                              <!-- /.testimonials-card__image -->
                              <div class="testimonials-card__rating">
                                 <i class="icofont-star" v-for="r in slide.rating" :key="r"></i>
                              </div>
                              <!-- /.testimonials-card__rating -->
                              <div class="testimonials-card__content">
                                 {{ slide.content }}
                              </div>
                              <!-- /.testimonials-card__content -->
                              <h3 class="testimonials-card__name">
                                 {{ slide.name }}
                              </h3>
                              <!-- /.testimonials-card__name -->
                              <p class="testimonials-card__designation">{{ slide.designation }}</p>
                              <!-- /.testimonials-card__designation -->
                              <div class="testimonials-card__quote"><i class="icofont-quote-left"></i></div>
                           </div>
                           <!-- /.testimonials-card -->
                        </SplideSlide>
                     </Splide>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </div>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { ref, onMounted } from "vue";
import { testimonialsData } from "@/data/TestimonialsOne";

const main = ref(null);
const thumbs = ref(null);

const mainOptions = {
   type: "loop",
   perPage: 2,
   perMove: 1,
   fixedHeight: 245,
   pagination: false,
   arrows: false,
   cover: true,
   autoplay: true,
   interval: 3000,
   pauseOnHover: true,
   height: "652px",
   direction: "ttb",
   drag: false,
   breakpoints: {
      992: {
         perPage: 1,
         perMove: 1,
         direction: "ltr", // Change to horizontal on smaller screens
         drag: true, // Enable dragging on smaller screens
      },
   },
};

const thumbsOptions = {
   type: "loop",
   perPage: 3,
   perMove: 1,
   rewind: true,
   fixedWidth: 200,
   arrows: true,
   fixedHeight: 58,
   isNavigation: true,
   gap: 40,
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
.wrapper {
   padding: 20px;
}
.testimonials-one__wrapper .splide__slide {
   height: auto !important;
}
.testimonials-one__image .splide__track--nav > .splide__list > .splide__slide {
   height: auto !important;
}
.carousel-container {
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
}

.main-carousel {
   flex: 1;
   margin-right: 20px;
}
.testimonials-one__image .splide__track--nav > .splide__list > .splide__slide {
   border: none;
}

.testimonials-one__image .is-active.is-visible .testimonials-one__image__item {
   border-color: var(--accent-color);
   transition: all 400ms ease;
}
.testimonials-one__image .splide__track {
   margin-top: 160px;
   padding: 10px 0 !important;
   transform: rotate(12deg);
   margin-left: -170px;
}
</style>
