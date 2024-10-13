<template>
   <div>
      <slot />
   </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const styleElement = ref(null);

onMounted(async () => {
   try {
      const cssModule = await import("~/assets/css/careox-dark.css?inline");
      styleElement.value = document.createElement("style");
      styleElement.value.innerHTML = cssModule.default;
      document.head.appendChild(styleElement.value);
      console.log("Style appended:", styleElement.value);
   } catch (error) {
      console.error("Error loading style:", error);
   }
});

onBeforeUnmount(() => {
   if (styleElement.value) {
      document.head.removeChild(styleElement.value);
      console.log("Style removed:", styleElement.value);
   } else {
      console.log("No style element found on unmount.");
   }
});
</script>

<style lang="scss" scoped></style>
