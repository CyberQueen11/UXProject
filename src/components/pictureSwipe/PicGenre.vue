<template>
  <div class="">
    <h2 class="mx-2">{{ title }}</h2>
    <div class="carousel">
      <div class="carousel-item my-4 mx-1">
        <img class="" src="https://placeholder.pics/svg/160x200" alt="pic" @click="$emit('myEvent', 'fantasy')">
      </div>

      <div class="carousel-item my-4 mx-1">
        <img class="" src="https://placeholder.pics/svg/160x200" alt="pic" @click="$emit('myEvent', 'horror')">
      </div>

      <div class="carousel-item my-4 mx-1">
        <img class="" src="https://placeholder.pics/svg/160x200" alt="pic" @click="$emit('myEvent', 'mystery')">
      </div>

      <div class="carousel-item my-4 mx-1">
        <img class="" src="https://placeholder.pics/svg/160x200" alt="pic" @click="$emit('myEvent', 'romance')">
      </div>

      <div class="carousel-item my-4 mx-1">
        <img class="" src="https://placeholder.pics/svg/160x200" alt="pic" @click="$emit('myEvent', 'fiction')">
      </div>

      <div class="carousel-item my-4 mx-1">
        <img class="" src="https://placeholder.pics/svg/160x200" alt="pic" @click="$emit('myEvent', 'thriller')">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "PicContain",
  data() {
    return {
      title: "Genre",
      genre: "",
    };
  },
  methods: {},
};
</script>
