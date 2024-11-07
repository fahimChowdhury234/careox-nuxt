<template>
   <footer class="main-footer">
      <div class="container text-center">
         <h2 class="main-footer__title">{{ footerData.title }}</h2>
         <p class="main-footer__text">{{ footerData.text }}</p>
         <div class="main-footer__btn">
            <a :href="footerData.purchaseButton.link" target="_blank" rel="noreferrer" class="careox-btn">
               <span>{{ footerData.purchaseButton.label }}</span>
            </a>
            <a :href="footerData.videoButton.videoLink" class="careox-btn video-popup">
               <span>{{ footerData.videoButton.label }}</span>
            </a>
         </div>
      </div>

      <div class="container">
         <div class="main-footer__copyright text-center">
            <p>
               {{ footerData.copyright }} <span class="dynamic-year">{{ dynamicYear }}</span> by {{ footerData.templateName }}
            </p>
         </div>
      </div>
   </footer>
</template>

<script setup>
import { footerData } from "@/data/DemoFooter";
import { ref, onMounted } from "vue";

// Dynamic year setup
const dynamicYear = ref(new Date().getFullYear());

onMounted(() => {
   dynamicYear.value = new Date().getFullYear();
});
</script>

<style scoped></style>
