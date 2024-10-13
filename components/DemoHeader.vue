<template>
   <header class="header">
      <div class="container">
         <div class="header__wrapper">
            <NuxtLink :to="'/'" class="header__logo">
               <img :src="headerData.logo.src" :alt="headerData.logo.alt" :width="headerData.logo.width" />
            </NuxtLink>
            <div class="header__btn">
               <a v-for="(button, index) in headerData.buttons" :key="index" :href="button.link" :rel="button.rel" :target="button.target" class="careox-btn">
                  <span>{{ button.text }}</span>
               </a>
            </div>
         </div>
      </div>
   </header>
</template>

<script setup>
import { headerData } from "@/data/DemoHeader";
</script>

<style scoped></style>
