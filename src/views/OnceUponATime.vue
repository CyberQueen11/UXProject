<script>
import OnceUponComp from "../components/OnceUponComp/OnceUponComp.vue";
import HomeButton from "../components/general_components/HomeButton.vue";
import AboutButton from "../components/general_components/AboutButton.vue";
import BooksDecor from "../components/general_components/BooksDecor.vue";

export default {
  components: {
    BooksDecor,
    OnceUponComp,
    HomeButton,
    AboutButton
  },
}; 

</script>

<template>
  <header>
    <HomeButton />
  </header>

  <main>
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
      <div class="absolute flex flex-row justify-center top-[160vw] items-end">
        <img
          src="../assets/icons/bookslightred.png"
          alt="book icon"
          class="w-2/3 opacity-50 max-w-[200px] h-auto"
        />
        <img
          src="../assets/icons/booksdarkred.png"
          alt="book icon"
          class="w-2/6 opacity-40 max-w-[200px] h-1/2"
        />
      </div>
    </div>

    <!-- Background images DESKTOP-->
    <div
      class="hidden lg:flex relative w-full mb-[80px] flex-col items-center"
    >
      <img
        src="../assets/onceUponBkgr/book.png"
        alt="book background"
        class="top-[0vw] left-[0vw] z-10 w-[60vw] h-auto"
      />
    </div>

    <!-- Drop down menu MOBILE & DESKTOP-->
    <div
      class="absolute z-20 top-[75vw] left-[28vw] lg:top-[30vw] lg:left-[28vw]"
    >
      <OnceUponComp />
    </div>
  </main>

  <AboutButton />

  <BooksDecor :showOnceUponDecor="true" />
</template>
