<template>
   <section class="event-one">
      <div class="event-one__bg" :style="{ backgroundImage: `url(${eventData.backgroundImage})` }"></div>
      <div class="container">
         <div class="sec-title text-center">
            <h6 class="sec-title__tagline bw-split-in-right"><span class="sec-title__tagline__border"></span>{{ eventData.sectionTitle }}</h6>
            <h3 class="sec-title__title bw-split-in-left">{{ eventData.sectionMainTitle }}</h3>
         </div>
         <div class="row gutter-y-30 masonry-layout">
            <div class="col-xl-4 col-md-6 masonry-layout-item" v-for="(event, index) in eventData.events" :key="index">
               <div class="event-one__item">
                  <img :src="event.image" :alt="event.title" />
                  <NuxtLink :to="event.link" class="event-one__item__rm">
                     <i class="icon-right-arrow"></i>
                  </NuxtLink>
                  <div class="event-one__item__content">
                     <h3 class="event-one__item__title">
                        <NuxtLink :to="event.link">{{ event.title }}</NuxtLink>
                     </h3>
                     <ul class="event-one__item__meta">
                        <li><i class="icofont-ui-calendar"></i>{{ event.date }}</li>
                        <li><i class="icofont-location-pin"></i>{{ event.location }}</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { eventData } from "@/data/EventOne";
const isotope = ref(null);

onMounted(async () => {
   // Initialize Isotope for the masonry layout
   if (process.client) {
      const Isotope = (await import("isotope-layout")).default || (await import("isotope-layout"));

      isotope.value = new Isotope(document.querySelector(".masonry-layout"), {
         itemSelector: ".masonry-layout-item",
         layoutMode: "masonry",

         masonry: {
            columnWidth: ".masonry-layout-item",
         },
      });

      nextTick(() => {
         isotope.value.layout();
      });
   }
});

onBeforeUnmount(() => {
   if (isotope.value) {
      isotope.value.destroy();
   }
});
</script>

<style scoped>
/* Add your specific styles for the event section */
</style>
