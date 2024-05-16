<template>
  <div class="flex flex-col items-center">
    <h2 class="mx-2 text-3xl font-quattrocento">{{ title }}</h2>
    <div class="carousel">
      <div class="carousel-item my-4 mx-1">
        <img  class="cursor-pointer" src="..\..\assets\Picture_swipe\Genre\Fantasy.png" alt="pic" @click="$emit('myEvent', 'fantasy')">
      </div>

      <div class="carousel-item my-4 mx-1">
        <img class="cursor-pointer" src="..\..\assets\Picture_swipe\Genre\Horror.png" alt="pic" @click="$emit('myEvent', 'horror')">
      </div>

      <div class="carousel-item my-4 mx-1">
        <img class="cursor-pointer" src="..\..\assets\Picture_swipe\Genre\Romance.png" alt="pic" @click="$emit('myEvent', 'romance')">
      </div>

      <div class="carousel-item my-4 mx-1">
        <img class="cursor-pointer" src="..\..\assets\Picture_swipe\Genre\Science fiction.png" alt="pic" @click="$emit('myEvent', 'fiction')">
      </div>

      <div class="carousel-item my-4 mx-1">
        <img class="cursor-pointer" src="..\..\assets\Picture_swipe\Genre\Thriller.png" alt="pic" @click="$emit('myEvent', 'thriller')">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "PicGenre",
  emits: ['myEvent'],
  data() {
    return {
      title: "Genre",
      genre: "",
    };
  },
  methods: {

  },
};
</script>
