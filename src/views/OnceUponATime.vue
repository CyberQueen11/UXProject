<script setup>
import OnceUponComp from "../components/OnceUponComp/OnceUponComp.vue";
import HomeButton from "../components/general_components/HomeButton.vue";
</script>

<template>
  <main>
    <HomeButton />

    <!-- Title MOBILE & DESKTOP-->
    <div class="relative flex justify-center mt-20 lg:mt-32">
      <h2 class="font-quattrocento custom-text-red text-2xl lg:text-4xl">
        Once Upon A Time
      </h2>
    </div>

    <!-- Paragraph MOBILE & DESKTOP-->
    <div class="relative flex justify-center">
      <p class="h-auto text-[16px] custom-text-blue font-redHatDisplay">
        Choose from the options in the dropdown
      </p>
    </div>

    <!-- Background images MOBILE-->
    <div
      class="lg:hidden relative w-full min-h-screen flex flex-col items-center"
    >
      <img
        src="../assets/onceUponBkgr/leftHalf.png"
        alt="leftbook"
        class="absolute top-[10vw] left-[4vw] z-10 w-full h-auto"
      />
      <img
        src="../assets/icons/bookslightred.png"
        alt="book icon"
        class="absolute w-2/3 opacity-50 max-w-[200px] h-auto top-[150vw]"
      />
    </div>

    <!-- Background images DESKTOP-->
    <div
      class="hidden lg:flex relative w-full min-h-screen flex-col items-center"
    >
      <img
        src="../assets/onceUponBkgr/book.png"
        alt="book background"
        class="top-[0vw] left-[0vw] z-10 w-1/2 h-auto"
      />
    </div>

    <!-- Drop down menu MOBILE & DESKTOP-->
    <div
      class="absolute z-20 top-[75vw] left-[28vw] lg:top-[0vw] lg:left-[0vw]"
    >
      <OnceUponComp />
    </div>
  </main>
</template>

<style>
/* import fonts from google */
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Quattrocento&display=swap");

.font-quattrocento {
  font-family: "Quattrocento", serif;
}

.font-redHatDisplay {
  font-family: "Red Hat Display", sans-serif;
}

.custom-bg-red {
  background-color: #870b1c;
}

.custom-text-red {
  color: #870b1c;
}

.custom-text-blue {
  color: #141e46;
}
</style>
