<template>
   <section class="gallery-one">
      <div class="container">
         <client-only>
            <div ref="slider" class="my-slider">
               <div class="slide" v-for="item in gallery" :key="item.id">
                  <div class="gallery-one__card">
                     <img :src="item.src" :alt="item.alt" />
                     <div class="gallery-one__card__hover">
                        <a :href="item.href" class="img-popup">
                           <span class="gallery-one__card__icon"></span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </client-only>
      </div>
   </section>
</template>

<script setup>
import { galleryData } from "@/data/GalleryGrid";
const gallery = galleryData;

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
         navPosition: "bottom",
         autoplayButtonOutput: false,
         controls: false,
         dots: false,
         autoplayTimeout: 6000,
         speed: 1000,
         responsive: {
            0: { items: 1 },
            500: { items: 2 },
            920: { items: 3 },
         },
      });
   }
   new GLightbox({
      selector: ".img-popup",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
   });
});
</script>

<style lang="scss" scoped></style>
