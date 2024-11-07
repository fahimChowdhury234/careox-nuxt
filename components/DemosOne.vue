<template>
   <section class="demos-one" id="demos">
      <div class="container">
         <div class="row">
            <div v-for="(demo, index) in demosData" :key="index" class="col-md-6 col-lg-4">
               <div class="demos-one__single">
                  <div class="demos-one__image">
                     <img :src="demo.image" :width="demo.width" :height="demo.height" :alt="demo.alt" />
                     <div class="demos-one__buttons">
                        <NuxtLink v-for="(button, btnIndex) in demo.buttons" :key="btnIndex" :to="button.link" target="_blank" class="careox-btn demo-one__btn">
                           <span>{{ button.text }}</span>
                        </NuxtLink>
                     </div>
                  </div>
                  <div class="demos-one__text">
                     <h3 class="demos-one__text__title">{{ demo.title }}</h3>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { demosData } from "@/data/DemosOne";
</script>

<style scoped></style>
