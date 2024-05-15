<template>
  <header class="flex mt-4 lg:my-10 flex-col items-center">
    <HomeButton />

    <!-- mobile logo -->
    <img
      class="w-[280px] mt-2 block lg:hidden"
      src="../../assets/icons/Logotyp_about_us.png"
      alt="header-mobile"
    />
  </header>
</template>
<script setup>
import HomeButton from "./HomeButton.vue";
</script>
