<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <h4>Welcome to your digital book finder</h4>

    <div class="app-link">
      <img src="../assets/judge-logo.webp" alt="judge" />
      <div class="desc">
        <RouterLink to="/judge-the-book-by-its-cover">
          <h5>Judge The Book By Its Cover</h5>
        </RouterLink>
        <p>Let loose and judge the book by its cover</p>
      </div>
    </div>

    <div class="app-link">
      <img src="../assets/swipe-logo.svg" alt="photo-swipe" />
      <div class="desc">
        <RouterLink to="/photo-swipe"><h5>Photo Swipe</h5></RouterLink>
        <p>Let your visual instinct guide you</p>
      </div>
    </div>

    <div class="app-link">
      <img src="../assets/icons/Once_upon_a_time.png" alt="once-upon-time" />
      <div class="desc">
        <RouterLink to="/once-upon-a-time"
          ><h5>Once Upon a Time</h5></RouterLink
        >
        <p>Write your own story</p>
      </div>
    </div>
  </div>
  <RouterView />
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1em;
  h4 {
    color: rgb(79, 77, 77);
    margin-bottom: 0.5em;
  }
  div {
    margin: 1em auto;
  }
}

.app-link {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(79, 77, 77);
  width: 50%;
  img {
    width: 30px;
    height: 30px;
  }

  h5 {
    color: rgb(79, 77, 77);
  }

  p {
    font-size: x-small;
  }

  div {
    margin-left: 0.5em;
  }
}

.wrapper .app-link:last-child {
  margin-bottom: 10em;
}

.menu > img {
  height: 40px;
  width: 40px;
}

.logo-wrapper > img {
  width: 100px;
  height: 100px;
}

.my-library > img {
  height: 35px;
  width: 35px;
}
</style>
