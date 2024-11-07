<template>
   <section class="gallery-one">
      <div class="container-fluid">
         <div class="row masonry-layout">
            <div v-for="item in gallery" :key="item.id" :class="`col-md-${item.md} col-lg-${item.lg} gallery-one__col`">
               <div class="gallery-one__card">
                  <img :src="item.src" alt="Gallery Image" />
                  <div class="gallery-one__card__hover">
                     <a :href="item.href" class="img-popup">
                        <span class="gallery-one__card__icon"></span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { galleryData } from "@/data/GalleryData.js";

const gallery = galleryData;

// Ref for storing the Isotope instance
const isotope = ref(null);

onMounted(async () => {
   // Initialize Isotope for the masonry layout
   if (process.client) {
      // Dynamically import Isotope, ensuring it's imported correctly
      const Isotope = (await import("isotope-layout")).default || (await import("isotope-layout"));

      isotope.value = new Isotope(document.querySelector(".masonry-layout"), {
         itemSelector: ".gallery-one__col",
         layoutMode: "masonry",
         percentPosition: true,
         masonry: {
            columnWidth: ".gallery-one__col", // Optionally set column width
         },
      });

      // Re-layout Isotope once the next tick is completed (when images are loaded)
      nextTick(() => {
         isotope.value.layout();
      });
   }
});

onBeforeUnmount(() => {
   // Destroy the Isotope instance to clean up resources
   if (isotope.value) {
      isotope.value.destroy();
   }
});
onMounted(async () => {
   new GLightbox({
      selector: ".img-popup",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
   });
});
</script>

<style scoped>
/* Add your custom styles here */
</style>
