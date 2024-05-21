<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header></header>
  <main class="bg-[url('../assets/background/Startsida.png')]">
    <div class="grid grid-cols gap-4 justify-items-center h-screen">
      <div class="center-item w-[230px] h-[180px] mt-[200px]">
        <img src="../assets/icons/startbook.png" alt="Start book"/>
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
  @apply flex justify-center items-center;
}
</style>
