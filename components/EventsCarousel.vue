<template>
   <div>
      <section class="event-one event-one--page">
         <div class="container">
            <div class="sec-title text-center">
               <h6 class="sec-title__tagline bw-split-in-right"><span class="sec-title__tagline__border"></span>Our Event</h6>
               <!-- /.sec-title__tagline -->

               <h3 class="sec-title__title bw-split-in-left">Our Upcoming Event</h3>
               <!-- /.sec-title__title -->
            </div>
            <!-- /.sec-title -->
            <div class="event-one__carousel">
               <client-only>
                  <div ref="slider" class="my-slider">
                     <div class="slide" v-for="(event, index) in eventData.events" :key="index">
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
               </client-only>
            </div>
         </div>
      </section>
   </div>
</template>

<script setup>
import { eventData } from "@/data/EventOne";

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
