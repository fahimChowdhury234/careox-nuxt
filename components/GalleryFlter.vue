<template>
   <section class="gallery-one">
      <div class="container-fluid">
         <div class="text-center">
            <ul class="list-unstyled post-filter gallery-one__filter__list">
               <li v-for="(filter, index) in filterCategories" :key="index" :class="{ active: selectedFilter === filter.filterClass }" @click="filterProjects(filter.filterClass)">
                  <span>{{ filter.name }}</span>
               </li>
            </ul>
            <!-- /.list-unstyled -->
         </div>
         <!-- /.text-center -->

         <div class="row masonry-layout filter-layout">
            <div v-for="item in filteredProjects" :key="item.id" :class="['col-md-6', 'col-lg-' + item.xl, 'filter-item', ...item.filterClasses]">
               <div class="gallery-one__card">
                  <img :src="item.image" :alt="item.title" />
                  <div class="gallery-one__card__hover">
                     <a :href="item.image" class="img-popup">
                        <span class="gallery-one__card__icon"></span>
                     </a>
                  </div>
                  <!-- /.gallery-one__card__hover -->
               </div>
               <!-- /.gallery-one__card -->
            </div>
            <!-- /.col -->
         </div>
         <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
   </section>
   <!-- /.gallery-one -->
</template>

<script setup>
import { filterCategories, galleryFilterData } from "@/data/GalleryFilterData";
const selectedFilter = ref("filter-item");
const isotopeInstance = ref(null);
const filteredProjects = ref(galleryFilterData);

const filterProjects = (filterClass) => {
   selectedFilter.value = filterClass;
   if (isotopeInstance.value) {
      isotopeInstance.value.arrange({ filter: filterClass === "filter-item" ? "*" : `.${filterClass}` });
   }
};

onMounted(async () => {
   if (process.client) {
      const Isotope = (await import("isotope-layout")).default || (await import("isotope-layout"));
      isotopeInstance.value = new Isotope(document.querySelector(".filter-layout"), {
         itemSelector: ".filter-item",
         layoutMode: "masonry",
      });
   }
   new GLightbox({
      selector: ".img-popup",
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
   });
});
</script>

<style scoped></style>
