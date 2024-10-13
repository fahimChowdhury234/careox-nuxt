<template>
   <section class="blog-one blog-one--page">
      <div class="container">
         <div class="row gutter-y-60">
            <div class="col-lg-8">
               <div class="row gutter-y-30">
                  <div v-for="post in blogPosts" :key="post.id" class="col-md-6">
                     <div class="blog-card wow fadeInUp" :data-wow-duration="'1500ms'" :data-wow-delay="'00ms'" :style="`--accent-color: ${post.accentColor}`">
                        <div class="blog-card__image">
                           <img :src="post.image" :alt="post.title" />
                           <img :src="post.image" :alt="post.title" />

                           <a :href="post.link" class="blog-card__image__link">
                              <span class="sr-only">{{ post.title }}</span>
                           </a>
                           <div class="blog-card__date"><i class="icofont-ui-calendar"></i>{{ post.date }}</div>
                        </div>
                        <div class="blog-card__content">
                           <ul class="list-unstyled blog-card__meta">
                              <li>
                                 <a :href="post.link"><img :src="post.authorImage" alt="careox" />Admin: {{ post.author }}</a>
                              </li>
                              <li>
                                 <a :href="post.link"><i class="icofont-comment"></i>Comment ({{ post.commentCount }})</a>
                              </li>
                           </ul>
                           <h3 class="blog-card__title">
                              <a :href="post.link">{{ post.title }}</a>
                           </h3>
                           <p class="blog-card__text">{{ post.description }}</p>
                           <a :href="post.link" class="blog-card__link">
                              <span class="blog-card__link__front"><span class="icofont-double-right"></span></span>
                              <span class="blog-card__link__back"><span class="icofont-double-right"></span>Read More</span>
                           </a>
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
            <div class="col-lg-4">
               <BlogSidebar :categories="sidebarData.categories" :tags="sidebarData.tags" :recentPosts="sidebarData.recentPosts" />
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import { blogPosts, sidebarData } from "~/data/BlogGrid";
</script>

<style lang="scss" scoped></style>
