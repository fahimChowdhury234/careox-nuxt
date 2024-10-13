<template>
   <section class="tab-one">
      <div class="container">
         <div class="sec-title text-center">
            <h6 class="sec-title__tagline bw-split-in-right"><span class="sec-title__tagline__border"></span>{{ tabData.sectionTagline }}</h6>
            <h3 class="sec-title__title bw-split-in-left">
               {{ tabData.sectionTitle }}
            </h3>
         </div>
         <div class="tab-one__wrapper tabs-box">
            <ul class="tab-one__list tab-buttons clearfix list-unstyled">
               <li
                  v-for="(tab, index) in tabData.tabs"
                  :key="index"
                  :class="{ 'tab-btn': true, 'active-btn': activeTab === index }"
                  @click="setActiveTab(index)"
                  :style="{ '--accent-color': tab.accentColor }"
               >
                  <span class="tab-one__list__icon">
                     <i :class="tab.icon"></i>
                  </span>
                  {{ tab.name }}
               </li>
            </ul>
            <div class="tabs-content">
               <TabContent v-for="(tab, index) in tabData.tabs" :key="index" :tab="tab" :isActive="activeTab === index" />
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { ref } from "vue";
import { tabData } from "@/data/TabOne";

// State for active tab
const activeTab = ref(1);

// Function to set the active tab
const setActiveTab = (index) => {
   activeTab.value = index;
};
</script>

<style scoped>
/* Add your specific styles here */
</style>
