<template>
   <section class="faq-one">
      <div class="container">
         <div class="row">
            <div class="col-xl-6">
               <div class="faq-one__content">
                  <div class="sec-title text-left">
                     <h6 class="sec-title__tagline bw-split-in-right">
                        <span class="sec-title__tagline__border"></span>
                        {{ faqData.sectionTitle }}
                     </h6>
                     <h3 class="sec-title__title bw-split-in-left">
                        {{ faqData.sectionMainTitle }}
                     </h3>
                  </div>
                  <p class="faq-one__content__text">
                     {{ faqData.description }}
                  </p>
                  <div class="faq-one__accordion careox-accordion" data-grp-name="careox-accordion">
                     <AccordionItem
                        v-for="(item, index) in faqData.accordionItems"
                        :key="index"
                        :accordionItem="item"
                        :isActive="activeAccordionId === item.id"
                        @toggle="setActiveAccordion(item.id)"
                     />
                  </div>
               </div>
            </div>
            <div class="col-xl-6">
               <div class="faq-one__image wow fadeInUp">
                  <img :src="faqData.images.mainImage" alt="faq-main" />
                  <div class="faq-one__image__left wow fadeInLeft" data-wow-delay="200ms">
                     <img :src="faqData.images.leftImage" alt="faq-left" />
                  </div>
                  <div class="faq-one__image__right wow fadeInRight" data-wow-delay="100ms">
                     <img :src="faqData.images.rightImage" alt="faq-right" />
                  </div>
                  <div class="faq-one__image__shape-top">
                     <img :src="faqData.images.shapeTop" alt="faq-shape-top" />
                  </div>
                  <div class="faq-one__image__shape-bottom">
                     <img :src="faqData.images.shapeBottom" alt="faq-shape-bottom" />
                  </div>
               </div>
            </div>
         </div>
         <div class="faq-one__text wow fadeInUp">
            <span>#</span>
            {{ faqData.donateText }}
            <NuxtLink :to="faqData.donateLink" class="careox-btn"><span>Donate Now</span></NuxtLink>
         </div>
      </div>
   </section>
</template>

<script setup>
import { ref } from "vue";
import { faqData } from "@/data/FaqOne.js";

const activeAccordionId = ref(2);
const setActiveAccordion = (id) => {
   activeAccordionId.value = activeAccordionId.value === id ? null : id;
};
</script>

<style scoped>
/* Add specific styles for the FAQ section */
</style>
