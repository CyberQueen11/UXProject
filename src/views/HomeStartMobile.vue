<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header></header>
  <main>
    <div class="grid grid-cols gap-4 justify-items-center h-screen">
      <div class="center-item w-[230px]">
        <img src="../assets/icons/Logo.svg" alt="" />
      </div>
      <RouterLink :to="{ name: 'Home' }">
        <button
          class="btn font-quattrocento text-[20px] custom-text-blue center-item w-[170px] h-[62px] font-medium bg-creamywhite hover:bg-white"
        >
          START
        </button>
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
.center-item {
  @apply flex justify-center;
}
</style>
