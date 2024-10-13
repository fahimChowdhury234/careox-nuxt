<template>
   <section class="blog-one blog-one--page">
      <div class="container">
         <div class="sec-title text-center">
            <h6 class="sec-title__tagline bw-split-in-right"><span class="sec-title__tagline__border"></span>{{ sectionTitle.tagline }}</h6>
            <h3 class="sec-title__title bw-split-in-left" v-html="sectionTitle.title"></h3>
         </div>
         <div class="blog-one__carousel">
            <client-only>
               <div ref="slider" class="my-slider">
                  <div class="slide" v-for="(blog, index) in blogData" :key="blog.id">
                     <BlogTwoCard :blog="blog" :accentColor="accentColors[index % accentColors.length]" />
                  </div>
               </div>
            </client-only>
         </div>
      </div>
   </section>
</template>

<script setup>
import { blogData, sectionTitle } from "@/data/BlogCarousel";

const accentColors = ["#ffa415", "#ff5528", "#8139e7"]; // Define accent colors for each card

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
         dots: true,
         autoplayTimeout: 6000,
         speed: 1000,
         responsive: {
            0: { items: 1 },
            500: { items: 1 },
            992: { items: 2 },
            1200: { items: 3 },
         },
      });
   }
});
</script>

<style scoped>
/* Add your specific styles for BlogSection here */
</style>
