<template>
   <div>
      <NuxtLayout>
         <Preloader />
         <NuxtPage />
         <CustomCursor />
         <ScrollToTop />
      </NuxtLayout>
   </div>
</template>
<script setup>
if (process.client) {
   onMounted(() => {
      import("wow.js").then(({ default: WOW }) => {
         const wow = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: true,
            live: true,
         });
         wow.init();
      });
   });
}
</script>
