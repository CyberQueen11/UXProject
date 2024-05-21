<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header></header>
  <main
    class="bg-[url('../assets/background/Startsida.png')] flex flex-col items-center justify-center min-h-screen"
  >
    <div class="">
      <div class="w-[230px] h-[180px] mt-[65px]">
        <img src="../assets/icons/startbook.png" alt="Start book" />
      </div>
      <RouterLink :to="{ name: 'Home' }">
        <button
          class="mt-40 ml-10 btn font-quattrocento text-[20px] custom-text-blue w-[170px] h-[62px] font-medium bg-creamywhite hover:bg-white"
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
