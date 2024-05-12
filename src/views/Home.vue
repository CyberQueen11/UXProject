<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="flex flex-col items-center h-screan">
    <!--app logo -->
    <header class="m-2">
      <img src="../assets/icons/Header.png" alt="header" />
    </header>
    <main>
      <RouterLink to="/judge-the-book-by-its-cover">
        <div class="app-link">
          <div class="app-logo">
            <img src="../assets/icons/Judge_a_book.png" alt="judge" />
          </div>
          <div class="app-desc">
            <h3>Judge The Book By Its Cover</h3>
            <p>Let loose and judge the book by its cover</p>
          </div>
        </div>
      </RouterLink>

      <RouterLink to="/photo-swipe">
        <div class="app-link">
          <div class="app-logo">
            <img src="../assets/icons/Pic_swipe.png" alt="pic-swipe" />
          </div>
          <div class="desc">
            <h5>Photo Swipe</h5>
            <p>Let your visual instinct guide you</p>
          </div>
        </div>
      </RouterLink>

      <RouterLink to="/once-upon-a-time">
        <div class="app-link">
          <div class="app-logo">
            <img
              src="../assets/icons/Once_upon_a_time.png"
              alt="once-upon-time"
            />
          </div>
          <div class="app-desc">
            <h5>Once Upon a Time</h5>
            <p>Write your own story</p>
          </div>
        </div>
      </RouterLink>
    </main>
    <footer>
      <RouterLink to="/about">
        <p class="font-RedHatDisplay text-darkred">about</p>
      </RouterLink>
    </footer>
  </div>
  <RouterView />
</template>

<style scoped></style>
