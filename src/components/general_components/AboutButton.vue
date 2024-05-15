<template>
  <RouterLink :to="{ name: 'About' }">
    <footer class="flex flex-col items-center mb-[2vw]">
        <img src="../../assets/icons/About.png" alt="underline" />
    </footer>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
