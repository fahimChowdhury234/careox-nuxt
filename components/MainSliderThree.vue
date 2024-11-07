<template>
   <section class="main-slider-three" id="home">
      <div class="main-slider-three__carousel">
         <client-only>
            <div ref="slider">
               <div class="slide" v-for="(slide, index) in sliderData" :key="index">
                  <MainSliderThreeItem :slide="slide" :sliderShapes="sliderShapes" />
               </div>
            </div>
            <!-- Custom Controls -->
            <div id="custom_controlsContainer">
               <a id="prev"> <i class="icon-up-arrow-two"></i> </a>
               <a id="next"> <i class="icon-down-arrow-two"></i> </a>
            </div>
         </client-only>
      </div>
   </section>
</template>

<script setup>
import { sliderData, sliderShapes } from "@/data/MainSliderThree";
const slider = ref(null);

onMounted(async () => {
   if (typeof window !== "undefined") {
      const { tns } = await import("tiny-slider/src/tiny-slider");
      tns({
         container: slider.value,
         mode: "carousel",
         loop: true,
         autoplay: true,
         mode: "gallery",
         animateIn: "fadeIn",
         animateOut: "fadeOut",
         items: 1,
         preventScrollOnTouch: "auto",
         nav: false,
         mouseDrag: true,
         controlsContainer: "#custom_controlsContainer",
         prevButton: "#prev",
         nextButton: "#next",
         autoplayButtonOutput: false,

         dots: false,
         autoplayTimeout: 6000,
         speed: 1000,
      });
   }
});
</script>

<style scoped>
/* Add relevant styles for your slider */
.main-slider-three__carousel {
   position: relative;
}
.main-slider-three #custom_controlsContainer a {
   width: 50px;
   height: 50px;
   background-color: rgba(var(--careox-white-rgb, 255, 255, 255), 0.1);
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;
   font-size: 17px;
   color: var(--careox-white, #fff);

   transition: all 400ms ease;
   cursor: pointer;
}

.main-slider-three #custom_controlsContainer a:hover {
   background-color: var(--careox-base, #ff5528);
   color: var(--careox-white, #fff);
}
.main-slider-three #custom_controlsContainer {
   margin: auto 0;
   position: absolute;
   left: 60px;
   text-align: left;
   top: 55%;
   transform: translateY(-50%);
   z-index: 99;
   display: flex;
   align-items: center;
   flex-direction: column;
   gap: 15px;
}

@media (max-width: 1700px) {
   .main-slider-three #custom_controlsContainer {
      left: 30px;
   }
}

@media (max-width: 1500px) {
   .main-slider-three #custom_controlsContainer {
      flex-direction: row;
      transform: none;
      top: auto;
      bottom: 40px;
      left: 0;
      right: 0;
      margin: 0 auto;
      justify-content: center;
   }
}
</style>
