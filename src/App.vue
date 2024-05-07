<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />

  <footer>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </footer>
</template>
