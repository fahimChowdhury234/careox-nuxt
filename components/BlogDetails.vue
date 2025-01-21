<template>
  <section class="blog-details">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="blog-details__content">
            <!-- Blog Image -->
            <div class="blog-details__image">
              <img :src="blogDetails.image.src" :alt="blogDetails.image.alt" />
            </div>

            <!-- Meta Info -->
            <ul class="list-unstyled blog-details__top-meta">
              <li class="blog-details__top-meta__cats">
                <NuxtLink :to="blogDetails.meta.categoryLink">{{ blogDetails.meta.category }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="blogDetails.meta.author.link">
                  <img :src="blogDetails.meta.author.imageSrc" :alt="blogDetails.meta.author.name" />
                  {{ blogDetails.meta.author.name }}
                </NuxtLink>
              </li>
              <li><i class="icofont-comment"></i>Comment ({{ blogDetails.meta.commentsCount }})</li>
              <li><i class="icofont-ui-calendar"></i>{{ blogDetails.meta.date }}</li>
            </ul>

            <!-- Blog Title -->
            <h3 class="blog-details__title">{{ blogDetails.title }}</h3>

            <!-- Blog Content -->
            <div v-for="(paragraph, index) in blogDetails.content" :key="index" class="blog-details__text">
              <p>{{ paragraph }}</p>
            </div>

            <!-- Tags and Social Links -->
            <div class="blog-details__meta">
              <div class="blog-details__tags">
                <h4 class="blog-details__tags__title">Tags</h4>
                <div class="sidebar__tags">
                  <NuxtLink v-for="tag in blogDetails.tags" :key="tag" to="/blog-details">{{ tag }}</NuxtLink>
                </div>
              </div>

              <div class="blog-details__social">
                <a v-for="link in blogDetails.socialLinks" :key="link.name" :href="link.url" :style="{ '--accent-color': link.color }">
                  <i :class="link.iconClass" aria-hidden="true"></i>
                  <span class="sr-only">{{ link.name }}</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Comments Section -->
          <div class="comments-one">
            <h3 class="comments-one__title">{{ blogDetails.comments.length }} comments</h3>
            <ul class="list-unstyled comments-one__list">
              <li v-for="comment in blogDetails.comments" :key="comment.id" class="comments-one__card">
                <div class="comments-one__card__image">
                  <img :src="comment.authorImage" :alt="comment.authorName" />
                </div>
                <div class="comments-one__card__content">
                  <h3 class="comments-one__card__title">
                    {{ comment.authorName }}
                    <span class="comments-one__card__date">{{ comment.date }}</span>
                  </h3>
                  <p class="comments-one__card__text">{{ comment.text }}</p>
                  <div class="comments-one__card__btn">
                    <NuxtLink to="/blog-details-right" class="careox-btn comments-one__card__reply"><span>Reply</span></NuxtLink>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- Comment Form -->

          <BlogDetailsComment />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Importing the blog details data
import { blogDetails } from "@/data/BlogDetails";
</script>

<style scoped>
/* Add your styles if needed */
</style>
