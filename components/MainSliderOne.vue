<template>
   <section class="main-slider-one overflow-hidden" id="home" ref="home">
      <client-only>
         <div ref="slider" class="my-slider">
            <div class="slide" v-for="item in mainSliderOneData" :key="item.id">
               <MainSliderOneItem :bgImage="item.bgImage" :mainBg="item.mainBg" :layerImage="item.layerImage" :title="item.title" :text="item.text" :videoLink="item.videoLink" :shapes="item.shapes" />
            </div>
         </div>
      </client-only>
   </section>
</template>

<script setup>
import mainSliderOneData from "~/data/MainSliderOneData";
const slider = ref(null);

onMounted(async () => {
   if (typeof window !== "undefined") {
      const { tns } = await import("tiny-slider/src/tiny-slider");
      tns({
         container: slider.value,
         loop: true,
         autoplay: true,
         mode: "gallery",
         animateIn: "fadeIn",
         animateOut: "fadeOut",
         items: 1,
         gutter: 0,
         mouseDrag: true,
         preventScrollOnTouch: "auto",
         nav: true,
         autoplayButtonOutput: false,
         controls: false,
         dots: true,
         autoplayTimeout: 6000,
         speed: 1000,
      });
   }
});
</script>

<style lang="scss" scoped></style>
