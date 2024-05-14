<script setup>
import OnceUponComp from "../components/OnceUponComp/OnceUponComp.vue";
import HomeButton from "../components/general_components/HomeButton.vue";
</script>

<template>
  <head>
    <link
      href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;700&display=swap"
      rel="stylesheet"
    />

    <link
      href="https://fonts.googleapis.com/css2?family=Quattrocento&display=swap"
      rel="stylesheet"
    />
  </head>

  <main>
    <HomeButton />

    <!-- Title -->
    <div class="relative flex justify-center mt-[85px]">
      <h2
        class="h-auto lg:hidden font-quattrocento text-[31px] custom-text-red"
      >
        Once Upon A Time
      </h2>
    </div>

    <!-- Paragraph -->
    <div class="relative flex justify-center">
      <p
        class="h-auto lg:hidden text-[16px] custom-text-blue font-redHatDisplay"
      >
        Choose from the options in the dropdown
      </p>
    </div>

    <!-- Background images -->
    <div
      class="relative w-full min-h-screen flex flex-col items-center"
    >
      <!-- Background images -->
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

    <div class="absolute z-20 top-[75vw] left-[28vw]">
        <OnceUponComp />
    </div>

  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Quattrocento&display=swap');

.font-quattrocento {
  font-family: "Quattrocento", serif;
}

.font-redHatDisplay {
  font-family: 'Red Hat Display', sans-serif;
}

.custom-bg-red {
  background-color: #870b1c;
}

.custom-text-red {
  color: #870b1c;
}

.custom-text-blue {
  color: #141E46;
}
</style>