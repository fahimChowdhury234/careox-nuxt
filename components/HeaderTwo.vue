<template>
  <header class="main-header main-header--two sticky-header sticky-header--normal">
    <div class="container-fluid">
      <div class="main-header__inner">
        <div class="main-header__logo">
          <NuxtLink to="/">
            <img src="assets/images/logo-light.png" alt="Careox HTML" width="223" />
          </NuxtLink>
        </div>
        <!-- /.main-header__logo -->

        <nav class="main-header__nav main-menu">
          <ul class="main-menu__list">
            <li class="megamenu megamenu-clickable megamenu-clickable--toggler" :class="{ current: route.path.startsWith('/') }">
              <a @click.prevent="ismegamenu = true">Demos</a>
              <ul :class="`${ismegamenu ? 'megamenu-clickable--active ' : ' '}`">
                <li>
                  <div class="megamenu-popup">
                    <a href="#" class="megamenu-clickable--close"><span class="icon-close" @click.prevent="ismegamenu = false"></span></a>
                    <!-- /.megamenu-clickable--close -->
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
                                    <nuxt-link v-if="page.multiPageLink" :to="page.multiPageLink" class="careox-btn demo-one__btn"> <span>Multi Page</span><span></span> </nuxt-link>
                                    <nuxt-link v-if="page.onePageLink" :to="page.onePageLink" class="careox-btn demo-one__btn"> <span>One Page</span><span></span> </nuxt-link>
                                    <nuxt-link v-if="page.darkPageLink" :to="page.darkPageLink" class="careox-btn demo-one__btn"> <span>Dark Page</span><span></span> </nuxt-link>
                                    <nuxt-link v-if="page.viewPageLink" :to="page.viewPageLink" class="careox-btn demo-one__btn"> <span>View Page</span><span></span> </nuxt-link>
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
                        <!-- /.container -->
                      </div>
                      <!-- /.demos-one -->
                    </div>
                    <!-- /.megamenu-popup__content -->
                  </div>
                  <!-- /.megamenu-popup -->
                </li>
              </ul>
            </li>
            <li v-for="item in navItems" :key="item.name" :class="[item.subItems ? 'dropdown' : '', isCurrentRoute(item) ? 'current' : '']">
              <NuxtLink :to="item.href">{{ item.name }}</NuxtLink>
              <ul v-if="item.subItems" class="sub-menu">
                <li v-for="subitem in item.subItems" :key="subitem.name" :class="{ current: isCurrentRoute(subitem) }">
                  <NuxtLink :to="subitem.href">{{ subitem.name }}</NuxtLink>
                  <ul v-if="subitem.subItems" class="sub-menu">
                    <li v-for="deepSubItem in subitem.subItems" :key="deepSubItem.name" :class="{ current: isCurrentRoute(deepSubItem) }">
                      <NuxtLink :to="deepSubItem.href">{{ deepSubItem.name }}</NuxtLink>
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
          <span href="#" class="search-toggler main-header__search" @click="changeSearchPopupStatus">
            <i class="icon-magnifying-glass" aria-hidden="true"></i>
            <span class="sr-only">Search</span>
          </span>
          <!-- /.search-toggler -->
          <NuxtLink to="/cart" class="main-header__cart">
            <i class="icon-shopping-cart" aria-hidden="true"></i>
            <span class="main-header__cart__count">02</span>
            <span class="sr-only">Cart</span>
          </NuxtLink>
          <!-- /.search-toggler -->
          <NuxtLink to="/donate" class="careox-btn">
            <span><i class="icofont-heart"></i>Donate Now</span>
          </NuxtLink>
        </div>
        <!-- /.main-header__right -->
      </div>
      <!-- /.main-header__inner -->
    </div>
    <!-- /.container-fluid -->
  </header>
  <!-- /.main-header -->
</template>

<script setup>
import navItems from "~/data/NavItems";
import { useMainStore } from "~/stores/store";
import { demoPages } from "~/data/DemoPages";
const ismegamenu = ref(false);
const store = useMainStore();
const changeSearchPopupStatus = store.changeSearchPopupStatus;
const changeMobileDrawerStatus = store.changeMobileDrawerStatus;
const route = useRoute();

// Function to check if a route is current or has active children
const isCurrentRoute = (item) => {
  // Check if the current route matches this item's href
  if (route.path === item.href) {
    return true;
  }

  // Check if any subitems are active
  if (item.subItems) {
    return item.subItems.some((subItem) => route.path === subItem.href || (subItem.subItems && subItem.subItems.some((deepSubItem) => route.path === deepSubItem.href)));
  }

  return false;
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
