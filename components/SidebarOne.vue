<!-- ~/components/SidebarOne.vue -->

<template>
   <aside :class="`sidebar-one ${sideBarDrawerStatus === true ? 'active ' : ' '}`">
      <div class="sidebar-one__overlay"></div>
      <!-- /.sidebar-one__overlay -->
      <div class="sidebar-one__content">
         <div class="sidebar-one__close" @click="changeSideBarDrawerStatus"><i class="icofont-close-line"></i></div>
         <!-- /.sidebar-one__close -->

         <!-- Logo Section -->
         <div class="sidebar-one__logo">
            <NuxtLink :to="sidebar.logo.link" aria-label="logo image">
               <img :src="sidebar.logo.src" :alt="sidebar.logo.alt" :width="sidebar.logo.width" />
            </NuxtLink>
         </div>
         <!-- /.sidebar-one__logo-box -->

         <!-- Text Section -->
         <p class="sidebar-one__text">{{ sidebar.text }}</p>

         <!-- Contact Info Section -->
         <h4 class="sidebar-one__title">Contact Info:</h4>
         <ul class="sidebar-one__info">
            <li><span class="fas fa-map-marker-alt"></span> {{ sidebar.contact.address }}</li>
            <li>
               <span class="fas fa-envelope"></span>
               <NuxtLink :to="sidebar.contact.email.link">{{ sidebar.contact.email.address }}</NuxtLink>
            </li>
            <li>
               <span class="fas fa-phone-alt"></span>
               <NuxtLink :to="sidebar.contact.phone.link">{{ sidebar.contact.phone.number }}</NuxtLink>
            </li>
         </ul>

         <!-- Social Icons Section -->
         <div class="sidebar-one__social">
            <NuxtLink v-for="social in sidebar.social" :key="social.platform" v-bind:to="social.link" :style="{ '--accent-color': social.color }">
               <i :class="social.iconClass" aria-hidden="true"></i>
               <span class="sr-only">{{ social.platform }}</span>
            </NuxtLink>
         </div>
         <!-- /sidebar-one__social -->

         <!-- Newsletter Section -->
         <h4 class="sidebar-one__title">Newsletter:</h4>
         <form :action="sidebar.newsletter.actionUrl" class="sidebar-one__newsletter mc-form">
            <input type="text" :placeholder="sidebar.newsletter.placeholder" name="EMAIL" />
            <button type="submit" class="fas fa-paper-plane">
               <span class="sr-only">submit</span>
            </button>
         </form>
         <!-- /.sidebar-one__newsletter -->
      </div>
      <!-- /.sidebar-one__content -->
   </aside>
</template>

<script setup>
import { sidebarData } from "~/data/SidebarOne";
import { useMainStore } from "~/stores/store";
const sidebar = ref(sidebarData);

const store = useMainStore();

const sideBarDrawerStatus = computed(() => store.sideBarDrawerStatus);
const changeSideBarDrawerStatus = () => {
   store.changeSideBarDrawerStatus();
   const body = document.querySelector("body");
   if (body) {
      body.classList.remove("locked"); // Adds the 'locked' class to the <body> tag
   }
};
</script>

<style scoped>
/* Add relevant styles here for your sidebar */
</style>
