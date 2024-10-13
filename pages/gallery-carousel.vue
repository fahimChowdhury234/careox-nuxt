<template>
   <div>
      <TopBarTwo />
      <HeaderFour />
      <PageHeader title="Gallery Grid" currentPage="Gallery" />
      <GalleryCarousel />
      <CtaTwo />
      <Footer />
      <SearchPopup />
      <Drawer />
      <SidebarOne />
   </div>
</template>

<script setup>
onMounted(async () => {
   new GLightbox({
      selector: ".img-popup",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
   });
});
</script>

<style lang="scss" scoped></style>
