<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <nav>
      <div class="menu">
        <img src="./assets/hamburger-menu.svg" alt="menu" />
      </div>
      <div class="logo-wrapper">
        <img src="./assets/appLogo.svg" alt="logo" />
      </div>
      <div class="my-library">
        <img src="./assets/library-book.svg" alt="my-library" />
      </div>
    </nav>

    <div class="app-view">
      <RouterView />
    </div>

    <div class="home">
      <RouterLink to="/"
        ><img src="./assets/home-logo.svg" alt="home"
      /></RouterLink>
    </div>
  </div>
</template>

<style scoped>
.app-view {
  min-height: 471px;
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

.home {
  height: 4em;
  border-top: 1px solid rgb(79, 77, 77);
  text-align: center;
  align-content: center;
  img {
    width: 35px;
    height: 35px;
  }
}
</style>
