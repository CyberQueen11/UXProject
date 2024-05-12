<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="flex flex-col items-center">
    <!--app logo -->
    <header class="flex flex-col mt-4 lg:my-10">
      <!-- desktop logo -->
      <img
        class="hidden lg:block"
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
    </main>
    <!-- about -->
    <footer class="my-10">
      <RouterLink to="/about">
        <img src="../assets/icons/About.png" alt="underline" />
      </RouterLink>
    </footer>
  </div>
</template>
