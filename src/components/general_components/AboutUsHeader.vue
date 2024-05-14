<template>
  <header class="flex mt-4 lg:my-10">
    <HomeButton />
    <!-- desktop logo -->
    <img
      class="hidden lg:block"
      src="../../assets/icons/Header.png"
      alt="header"
    />
    <!-- mobile logo -->
    <img
      class="w-[200px] mt-8 block lg:hidden"
      src="../../assets/icons/Logotyp_about_us.png"
      alt="header-mobile"
    />
  </header>
</template>
<script setup>
import HomeButton from "./HomeButton.vue";
</script>
