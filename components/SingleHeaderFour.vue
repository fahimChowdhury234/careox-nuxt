<template>
   <header class="main-header main-header--four sticky-header sticky-header--normal">
      <div class="container-fluid">
         <div class="main-header__inner">
            <div class="main-header__logo">
               <NuxtLink to="/">
                  <img src="assets/images/logo-dark.png" alt="Careox HTML" width="223" v-if="!isDark" />
                  <img src="assets/images/logo-light.png" alt="Careox HTML" width="223" v-else />
               </NuxtLink>
            </div>
            <!-- /.main-header__logo -->

            <nav class="main-header__nav main-menu">
               <ul class="main-menu__list">
                  <li v-for="item in singleNavItemsFour" :key="item.name" :class="`${undefined !== item.subItems ? 'dropdown ' : ' '}`">
                     <nuxt-link :to="item.href">{{ item.name }}</nuxt-link>
                     <ul class="sub-menu" v-if="undefined !== item.subItems">
                        <li v-for="subitem in item.subItems" :key="subitem.name">
                           <nuxt-link :to="subitem.href">{{ subitem.name }}</nuxt-link>
                           <ul class="sub-menu" v-if="undefined !== subitem.subItems">
                              <li v-for="subitem in subitem.subItems" :key="subitem.name">
                                 <nuxt-link :to="subitem.href">{{ subitem.name }}</nuxt-link>
                              </li>
                           </ul>
                        </li>
                     </ul>
                  </li>
               </ul>
            </nav>
            <!-- /.main-header__nav -->
            <div class="main-header__right">
               <div class="mobile-nav__btn mobile-nav__toggler" @click="changeMobileDrawerStatus">
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
               <!-- /.mobile-nav__toggler -->
               <NuxtLink to="/donate" class="careox-btn">
                  <span><i class="icofont-heart"></i>Donate Now</span>
               </NuxtLink>
               <a href="#" class="search-toggler main-header__search" @click="changeSearchPopupStatus">
                  <i class="icon-magnifying-glass" aria-hidden="true"></i>
                  <span class="sr-only">Search</span> </a
               ><!-- /.search-toggler -->
               <NuxtLink to="/cart" class="main-header__cart">
                  <i class="icon-shopping-cart" aria-hidden="true"></i>
                  <span class="main-header__cart__count">02</span>
                  <span class="sr-only">Cart</span>
               </NuxtLink>
               <!-- /.search-toggler -->
               <a href="#" class="main-header--four__toggler" @click="changeSideBarDrawerStatus">
                  <div class="main-header--four__toggler__wrapper"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
               </a>
            </div>
            <!-- /.main-header__right -->
            <!-- /.main-header__right -->
         </div>
         <!-- /.main-header__inner -->
      </div>
      <!-- /.container-fluid -->
   </header>
   <!-- /.main-header -->
</template>

<script setup>
import { singleNavItemsFour } from "~/data/SingleNavItems";

import { useMainStore } from "~/stores/store";
import { demoPages } from "~/data/DemoPages";
defineProps({
   isDark: Boolean,
});
const ismegamenu = ref(false);
const store = useMainStore();
const changeSearchPopupStatus = store.changeSearchPopupStatus;
const changeMobileDrawerStatus = store.changeMobileDrawerStatus;
const changeSideBarDrawerStatus = () => {
   store.changeSideBarDrawerStatus();
   const body = document.querySelector("body");
   if (body) {
      body.classList.add("locked"); // Adds the 'locked' class to the <body> tag
   }
};
const handleScroll = () => {
   const nav = document.querySelector(".sticky-header");
   const scrollPosition = window.scrollY || window.pageYOffset;

   if (scrollPosition > 70) {
      nav.classList.add("sticky-header--cloned", "sticky-fixed");
      nav.classList.remove("sticky-header--normal", "sticky-fixed");
      nav.classList.add("active", "sticky-fixed");
   } else {
      nav.classList.remove("active", "sticky-fixed");
      nav.classList.remove("sticky-header--cloned", "sticky-fixed");
      nav.classList.add("sticky-header--normal", "sticky-fixed");
   }
};
onMounted(() => {
   window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
   window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped></style>
