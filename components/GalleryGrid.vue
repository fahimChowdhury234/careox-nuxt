<template>
   <section class="gallery-one">
      <div class="container-fluid">
         <div class="row">
            <div v-for="item in gallery" :key="item.id" class="col-md-6 col-lg-3">
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
import { galleryData } from "@/data/GalleryGrid";

const gallery = galleryData;
</script>

<style lang="scss" scoped></style>
