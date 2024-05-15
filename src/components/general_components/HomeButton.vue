<template>
  <RouterLink :to="{ name: 'Home' }">
    
    <!-- MOBILE -->
    <button class="w-8 h-10 block lg:hidden absolute top-4 left-4">
      <img src="../../assets/icons/Home.png" alt="home" />
    </button>

    <!-- DESKTOP -->
    <div
      class="hidden lg:flex relative w-full h-[7vw] top-[2vw] flex-col items-center"
    >
      <button>
        <img class="top-[6vw]" src="../../assets/icons/Header.png" alt="header" />
      </button>
    </div>

  </RouterLink>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
