<template>
   <section class="blog-one" id="blog">
      <div class="container">
         <div class="sec-title text-center">
            <h6 class="sec-title__tagline bw-split-in-right"><span class="sec-title__tagline__border"></span>News & articles</h6>
            <h3 class="sec-title__title bw-split-in-left">We Articles From Blog <br />News and Story</h3>
         </div>
         <div class="row gutter-y-30">
            <div class="col-lg-5">
               <!-- First blog card -->
               <BlogOneCard :blog="blogData.blogs[0]" :reverse="false" :delay="0" accentColor="#ffa415" />
            </div>
            <div class="col-lg-7">
               <!-- Second and third blog cards -->
               <BlogOneCard
                  v-for="(blog, index) in blogData.blogs.slice(1, 3)"
                  :key="index"
                  :blog="blog"
                  :reverse="true"
                  :delay="(index + 1) * 50"
                  :accentColor="index === 0 ? '#ff5528' : '#8139e7'"
               />
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { blogData } from "~/data/BlogOne";
</script>
