<script setup>
import AboutButton from "@/components/general_components/AboutButton.vue";
import HomeButton from "../components/general_components/HomeButton.vue";
import BookFetcher from "../components/judgeTheBookByCover/BookFetcher.vue";
</script>

<template>
  <HomeButton />
  <main>
    <BookFetcher />
  </main>
  <footer class="hidden lg:block">
    <AboutButton />
  </footer>
</template>
