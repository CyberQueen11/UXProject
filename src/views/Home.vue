<script>
import { RouterLink } from "vue-router";
import AboutButton from "../components/general_components/AboutButton.vue";
import BooksDecor from "../components/general_components/BooksDecor.vue";

export default {
  components: {
    BooksDecor,
    AboutButton,
  },
};
</script>

<template>
  <!--app logo -->
  <header class="flex flex-col mt-4 lg:my-10 items-center">
    <!-- desktop logo -->
    <img
      class="hidden lg:block w-1/2"
      src="../assets/icons/Header.png"
      alt="header"
    />

    <!-- mobile logo -->
    <img
      class="w-[200px] block lg:hidden"
      src="../assets/icons/Logotyp_the_book_finder.png"
      alt="header-mobile"
    />
  </header>

  <!-- app links -->
  <main>
    <div
      class="flex flex-col items-center lg:flex-row lg:mt-20 my-16 lg:mb-32 lg:justify-center lg:space-x-[5.5rem]"
    >
      <!-- judge the book by its cover -->
      <div class="app-link">
        <div class="app-logo">
          <img src="../assets/icons/Judge_a_book.png" alt="judge" />
        </div>
        <div class="app-desc">
          <h3>Judge The Book By Its Cover</h3>
          <p>Let loose and judge the book by its cover</p>
          <RouterLink to="/judge-the-book-by-its-cover">
            <button class="start-button">Start</button>
          </RouterLink>
          <img src="../assets/icons/Streck.png" alt="underline1" />
        </div>
      </div>

      <!-- picture swipe -->
      <div class="app-link">
        <div class="app-logo">
          <img src="../assets/icons/Pic_swipe.png" alt="pic-swipe" />
        </div>
        <div class="app-desc">
          <h3>Picture Swipe</h3>
          <p>Let your visual instinct guide you</p>
        </div>
        <RouterLink to="/photo-swipe"
          ><button class="start-button">Start</button></RouterLink
        >
        <img src="../assets/icons/Streck.png" alt="underline2" />
      </div>

      <!-- Once Upon a Time -->
      <div class="app-link">
        <div class="app-logo">
          <img
            src="../assets/icons/Once_upon_a_time.png"
            alt="once-upon-time"
          />
        </div>
        <div class="app-desc">
          <h3>Once Upon a Time</h3>
          <p>Write your own story</p>
        </div>
        <RouterLink to="/once-upon-a-time"
          ><button class="start-button">Start</button></RouterLink
        >
        <img src="../assets/icons/Streck.png" alt="underline3" />
      </div>
    </div>
  </main>

  <BooksDecor :showHomeAboutDecor="true" />

  <!-- about -->
  <AboutButton />
</template>
