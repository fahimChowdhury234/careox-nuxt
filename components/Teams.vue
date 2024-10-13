<template>
   <section class="team-two team-two--page">
      <div class="container">
         <div class="sec-title text-center">
            <h6 class="sec-title__tagline bw-split-in-right">
               <span class="sec-title__tagline__border"></span>
               Our Expert Team
            </h6>
            <h3 class="sec-title__title bw-split-in-left">Meet The Team Member</h3>
         </div>
         <div class="row gutter-y-30">
            <div class="col-lg-4 col-md-6" v-for="(teamMember, index) in teamMembers" :key="index">
               <TeamCardTwo :teamMember="teamMember" />
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { teamMembers } from "@/data/Teams";
</script>

<style scoped>
/* Add your styles here */
</style>
