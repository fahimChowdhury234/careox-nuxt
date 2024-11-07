<template>
   <div :class="`search-popup  ${searchPopupStatus ? 'active ' : ' '}`">
      <div class="search-popup__overlay search-toggler" @click="changeSearchPopupStatus"></div>
      <!-- /.search-popup__overlay -->
      <div class="search-popup__content">
         <form role="search" method="get" class="search-popup__form" action="#">
            <input type="text" id="search" placeholder="Search Here..." />
            <button type="submit" aria-label="search submit" class="careox-btn">
               <span><i class="icon-magnifying-glass"></i></span>
            </button>
         </form>
      </div>
      <!-- /.search-popup__content -->
   </div>
   <!-- /.search-popup -->
</template>

<script setup>
import { useMainStore } from "~/stores/store";

const store = useMainStore();

const searchPopupStatus = computed(() => store.searchPopupStatus);
const changeSearchPopupStatus = () => {
   store.changeSearchPopupStatus();
};
</script>

<style lang="scss" scoped></style>
