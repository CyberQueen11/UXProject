<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
    <RouterLink to="/JudgeBookView">JudgeBook</RouterLink>
    <RouterLink to="/PictureSwipeView">PictureSwipe</RouterLink>
    <RouterLink to="/OnceUponView">OnceUpon</RouterLink>

    <RouterView />
  </main>
</template>
