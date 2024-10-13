<template>
   <section class="faq-one faq-one--page">
      <div class="container">
         <div class="sec-title text-center">
            <h6 class="sec-title__tagline bw-split-in-right"><span class="sec-title__tagline__border"></span>OUR FAQ NOW</h6>
            <h3 class="sec-title__title bw-split-in-left">
               There's Donation of Center
               <br />
               Can Do Question.
            </h3>
         </div>

         <div class="row">
            <div class="col-xl-6">
               <div class="faq-one__accordion careox-accordion" data-grp-name="careox-accordion">
                  <AccordionItem v-for="(item, index) in faqData.slice(0, 4)" :key="index" :accordionItem="item" :isActive="activeAccordionId === item.id" @toggle="setActiveAccordion(item.id)" />
               </div>
            </div>
            <div class="col-xl-6">
               <div class="faq-one__accordion careox-accordion" data-grp-name="careox-accordion">
                  <AccordionItem v-for="(item, index) in faqData.slice(4, 8)" :key="index" :accordionItem="item" :isActive="activeAccordionId === item.id" @toggle="setActiveAccordion(item.id)" />
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { faqData } from "@/data/Faq";

const activeAccordionId = ref(2);
const setActiveAccordion = (id) => {
   activeAccordionId.value = activeAccordionId.value === id ? null : id;
   console.log(id);
};
</script>

<style scoped>
/* Your CSS styling */
</style>
