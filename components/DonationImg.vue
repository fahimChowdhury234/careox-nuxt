<template>
   <section class="donate-one">
      <div class="donate-one__bg" :style="{ backgroundImage: `url(${donateData.donateSection.background})` }"></div>
      <div class="donate-one__image wow fadeInLeft">
         <img :src="donateData.donateSection.image" alt="careox" />
      </div>
   </section>
</template>

<script setup>
import { donateData } from "~/data/DonationOne";
</script>

<style lang="scss" scoped></style>
