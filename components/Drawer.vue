<template>
   <div :class="`mobile-nav__wrapper ${mobileDrawerStatus ? 'expanded' : ''}`">
      <div class="mobile-nav__overlay mobile-nav__toggler" @click="changeMobileDrawerStatus"></div>
      <div class="mobile-nav__content" :class="{ 'megamenu-popup-active': ismegamenu }">
         <span class="mobile-nav__close mobile-nav__toggler" @click="changeMobileDrawerStatus">
            <i class="fa fa-times"></i>
         </span>

         <div class="logo-box">
            <NuxtLink to="/" aria-label="logo image"><img src="assets/images/logo-light.png" width="155" alt="logo" /></NuxtLink>
         </div>

         <div class="mobile-nav__container">
            <ul class="main-menu__list">
               <li class="megamenu megamenu-clickable megamenu-clickable--toggler" :class="{ current: ismegamenu }">
                  <a @click.prevent="toggleMegaMenu">Demos</a>
                  <ul v-if="ismegamenu" class="megamenu-clickable--active">
                     <li>
                        <div class="megamenu-popup">
                           <a href="#" class="megamenu-clickable--close" @click.prevent="ismegamenu = false">
                              <span class="icon-close"></span>
                           </a>
                           <div class="megamenu-popup__content">
                              <div class="demo-one">
                                 <div class="container">
                                    <div class="row">
                                       <div class="col-md-6 col-lg-4" v-for="(page, index) in demoPages" :key="index">
                                          <div class="demo-one__card">
                                             <div class="demo-one__image">
                                                <img :src="page.image" :alt="page.title" />
                                                <span v-if="page.isNew" class="demo-one__image__new">New</span>
                                                <div class="demo-one__btns">
                                                   <nuxt-link v-if="page.multiPageLink" :to="page.multiPageLink" class="tolak-btn demo-one__btn"> <b>Multi Page</b><span></span> </nuxt-link>
                                                   <nuxt-link v-if="page.onePageLink" :to="page.onePageLink" class="tolak-btn demo-one__btn"> <b>One Page</b><span></span> </nuxt-link>
                                                   <nuxt-link v-if="page.darkPageLink" :to="page.darkPageLink" class="tolak-btn demo-one__btn"> <b>Dark Page</b><span></span> </nuxt-link>
                                                   <nuxt-link v-if="page.viewPageLink" :to="page.viewPageLink" class="tolak-btn demo-one__btn"> <b>View Page</b><span></span> </nuxt-link>
                                                </div>
                                             </div>
                                             <div class="demo-one__content">
                                                <h3 class="demo-one__title">
                                                   <NuxtLink :to="page.multiPageLink || page.viewPageLink">{{ page.title }}</NuxtLink>
                                                </h3>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </li>
                  </ul>
               </li>
               <client-only>
                  <li v-for="item in navItems" :key="item.id" :class="{ dropdown: item.subItems }" v-auto-animate="{ duration: 400 }">
                     <div class="d-flex justify-content-between align-items-center main-menu__list__wrapper">
                        <NuxtLink :to="item.href">{{ item.name }}</NuxtLink>
                        <button v-if="item.subItems" @click="toggleDropdown(item.id)">
                           <i class="fa fa-angle-down" :style="isItems === item.id ? { transform: 'rotate(90deg)' } : {}"></i>
                        </button>
                     </div>
                     <ul v-if="isItems === item.id" v-auto-animate="{ duration: 600 }">
                        <li v-for="subItem in item.subItems" :key="subItem.id" :class="{ dropdown: subItem.subItems }" v-auto-animate="{ duration: 400 }">
                           <div class="d-flex justify-content-between align-items-center main-menu__list__wrapper">
                              <NuxtLink :to="subItem.href">{{ subItem.name }}</NuxtLink>
                              <button v-if="subItem.subItems" @click="toggleSubItemDropdown(subItem.id)">
                                 <i class="fa fa-angle-down" :style="isSubItems === subItem.id ? { transform: 'rotate(90deg)' } : {}"></i>
                              </button>
                           </div>
                           <ul v-if="isSubItems === subItem.id">
                              <li v-for="subSubItem in subItem.subItems" :key="subSubItem.id" v-auto-animate="{ duration: 400 }">
                                 <NuxtLink :to="subSubItem.href">{{ subSubItem.name }}</NuxtLink>
                              </li>
                           </ul>
                        </li>
                     </ul>
                  </li>
               </client-only>
            </ul>
         </div>

         <ul class="mobile-nav__contact list-unstyled">
            <li>
               <i class="fa fa-envelope"></i>
               <a href="mailto:needhelp@tolak.com">needhelp@tolak.com</a>
            </li>
            <li>
               <i class="fa fa-phone-alt"></i>
               <a href="tel:666-888-0000">666 888 0000</a>
            </li>
         </ul>

         <div class="mobile-nav__social">
            <a href="https://facebook.com"><i class="fab fa-facebook-f"></i><span class="sr-only">Facebook</span></a>
            <a href="https://pinterest.com"><i class="fab fa-pinterest-p"></i><span class="sr-only">Pinterest</span></a>
            <a href="https://twitter.com"><i class="fab fa-twitter"></i><span class="sr-only">Twitter</span></a>
            <a href="https://instagram.com"><i class="fab fa-instagram"></i><span class="sr-only">Instagram</span></a>
         </div>
      </div>
   </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useMainStore } from "~/stores/store";
import navItems from "~/data/NavItems";
import { demoPages } from "~/data/DemoPages";

const isItems = ref(null);
const isSubItems = ref(null);
const ismegamenu = ref(false);

const store = useMainStore();
const mobileDrawerStatus = computed(() => store.mobileDrawerStatus);

const changeMobileDrawerStatus = () => {
   store.changeMobileDrawerStatus();
};

const toggleDropdown = (itemId) => {
   isItems.value = isItems.value === itemId ? null : itemId;
};

const toggleSubItemDropdown = (subItemId) => {
   isSubItems.value = isSubItems.value === subItemId ? null : subItemId;
};

const toggleMegaMenu = () => {
   ismegamenu.value = !ismegamenu.value;
};
</script>

<style scoped>
/* Initially hide the dropdown */
.megamenu-popup-active {
   overflow: unset;
}
.sub-menu,
.subItem-menu {
   /* height: 0; */
   display: block !important;
   overflow: hidden;
   transition: height 0.3s ease;
   visibility: hidden;
}
.mobile-nav__content .main-menu__list ul {
   display: block;
}
.main-menu__list__wrapper a {
   line-height: 30px;
   color: var(--tolak-white, #fff);
   font-size: 12px;
   font-family: var(--tolak-font, "Rubik", sans-serif);
   text-transform: uppercase;
   font-weight: 500;
   height: 46px;
   letter-spacing: var(--tolak-letter-space, 0.1em);
   display: flex;
   align-items: center;
   transition: 500ms;
}
</style>
