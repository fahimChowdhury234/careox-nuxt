<template>
   <a href="#" data-target="html" class="scroll-to-target scroll-to-top">
      <span class="scroll-to-top__text">back top</span>
      <span class="scroll-to-top__wrapper">
         <span class="scroll-to-top__inner"></span>
      </span>
   </a>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

const handleScrollbar = () => {
   const bodyHeight = document.body.scrollHeight; // Total body height
   const scrollPos = window.innerHeight + window.scrollY; // Current scroll position
   let percentage = (scrollPos / bodyHeight) * 100; // Calculate percentage scrolled

   // Cap the percentage at 100
   if (percentage > 100) {
      percentage = 100;
   }

   // Update width of the scroll-to-top bar
   const scrollToTopInner = document.querySelector(".scroll-to-top__inner");
   if (scrollToTopInner) {
      scrollToTopInner.style.width = percentage + "%";
   }

   // Show or hide the scroll-to-top button based on scroll position
   const scrollToTop = document.querySelector(".scroll-to-top");
   if (window.scrollY > 100) {
      scrollToTop?.classList.add("show");
   } else {
      scrollToTop?.classList.remove("show");
   }
};

onMounted(() => {
   window.addEventListener("scroll", handleScrollbar);
});

onUnmounted(() => {
   window.removeEventListener("scroll", handleScrollbar);
});
</script>

<style scoped></style>
