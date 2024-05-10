<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <nav>
      <div class="menu">
        <img src="./assets/icons/Home.png" alt="menu" />
      </div>
      <div class="logo-wrapper">
        <img src="./assets/icons/Logo.svg" alt="logo" />
      </div>
      <div class="my-library">
        <img src="./assets/icons/Books.png" alt="my-library" />
      </div>
    </nav>

    <div class="app-view">
      <RouterView />
    </div>

    <div class="home">
      <RouterLink to="/"
        ><img src="./assets/icons/Home.png" alt="home"
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
