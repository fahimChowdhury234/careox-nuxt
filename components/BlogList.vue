<template>
   <section class="blog-one blog-one--page">
      <div class="container">
         <div class="row justify-content-center">
            <div class="col-lg-8">
               <div class="row gutter-y-30">
                  <div v-for="(blog, index) in blogList" :key="index" class="col-md-12">
                     <div class="blog-card-list wow fadeInUp" :style="{ '--accent-color': blog.accentColor }" :data-wow-duration="blog.duration" :data-wow-delay="blog.delay">
                        <div class="blog-card-list__image">
                           <img :src="blog.image" :alt="blog.imageAlt" />
                           <img :src="blog.image" :alt="blog.imageAlt" />

                           <NuxtLink :to="blog.link" class="blog-card-list__image__link">
                              <span class="sr-only">{{ blog.imageAlt }}</span>
                           </NuxtLink>
                        </div>
                        <div class="blog-card-list__content">
                           <ul class="list-unstyled blog-card-list__meta">
                              <li class="blog-card-list__meta__cats">
                                 <NuxtLink to="/blog-grid">{{ blog.category }}</NuxtLink>
                              </li>
                              <li>
                                 <NuxtLink to="/blog-list-right">
                                    <img :src="blog.authorImage" alt="Author Image" />
                                    Admin: {{ blog.author }}
                                 </NuxtLink>
                              </li>
                              <li><i class="icofont-comment"></i>Comment ({{ blog.comments }})</li>
                              <li><i class="icofont-ui-calendar"></i>{{ blog.date }}</li>
                           </ul>
                           <h3 class="blog-card-list__title">
                              <NuxtLink :to="blog.link">{{ blog.title }}</NuxtLink>
                           </h3>
                           <p class="blog-card-list__text">{{ blog.description }}</p>
                           <NuxtLink :to="blog.link" class="blog-card-list__link">
                              <span class="blog-card-list__link__front">
                                 <span class="icofont-double-right"></span>
                              </span>
                              <span class="blog-card-list__link__back"> <span class="icofont-double-right"></span>Read More </span>
                           </NuxtLink>
                        </div>
                     </div>
                  </div>

                  <div class="col-md-12">
                     <ul class="post-pagination blog-page__pagination">
                        <li>
                           <NuxtLink to="/blog-list">1</NuxtLink>
                        </li>
                        <li>
                           <NuxtLink class="current" to="/blog-list-right">2</NuxtLink>
                        </li>
                        <li>
                           <NuxtLink to="blog-list-right"><span class="icofont-double-right"></span></NuxtLink>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { blogList } from "~/data/BlogList";
</script>

<style lang="scss" scoped></style>
