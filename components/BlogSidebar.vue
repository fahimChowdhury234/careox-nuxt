<template>
   <div class="sidebar">
      <aside class="widget-area">
         <!-- Search -->
         <div class="sidebar__single sidebar__single--search">
            <form action="#" class="sidebar__search">
               <input type="text" placeholder="Search Here..." />
               <button type="submit" aria-label="search submit">
                  <span><i class="icofont-search-2"></i></span>
               </button>
            </form>
         </div>

         <!-- Categories -->
         <div class="sidebar__single">
            <h4 class="sidebar__title">Categories</h4>
            <ul class="sidebar__categories list-unstyled">
               <li v-for="(category, index) in categories" :key="index">
                  <NuxtLink :to="category.href">{{ category.text }} </NuxtLink>
                  ({{ category.count }})
               </li>
            </ul>
         </div>

         <!-- Tags -->
         <div class="sidebar__single sidebar__single--tags">
            <h4 class="sidebar__title">Tags</h4>
            <div class="sidebar__tags">
               <NuxtLink v-for="(tag, index) in tags" :key="index" :to="tag.href">{{ tag.text }}</NuxtLink>
            </div>
         </div>

         <!-- Recent Posts -->
         <div class="sidebar__single">
            <h4 class="sidebar__title">Recent Post</h4>
            <ul class="sidebar__posts list-unstyled">
               <li v-for="(post, index) in recentPosts" :key="index" class="sidebar__posts__item">
                  <div class="sidebar__posts__image">
                     <img :src="post.image.src" :alt="post.image.alt" />
                  </div>
                  <div class="sidebar__posts__content">
                     <p class="sidebar__posts__meta"><i class="icofont-calendar"></i>{{ post.date }}</p>
                     <h4 class="sidebar__posts__title">
                        <NuxtLink :to="post.href">{{ post.title }}</NuxtLink>
                     </h4>
                  </div>
               </li>
            </ul>
         </div>
      </aside>
   </div>
</template>

<script setup>
defineProps({
   categories: Array,
   tags: Array,
   recentPosts: Array,
});
</script>
