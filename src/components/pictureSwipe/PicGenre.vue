<!-- circle with numbers get filled in when user clicks a picture -->

<template>
  <div class="flex flex-col items-center">
    <img
      class="m-4 hidden lg:block"
      v-if="!genreClicked"
      src="..\..\assets\icons\image1.png"
      alt="circle"
    />
    <img
      class="m-4 hidden lg:block"
      v-else
      src="..\..\assets\icons\ph_circle-thin-1.png"
      alt="checked circle"
    />

    <h2 class="mx-2 text-3xl font-quattrocento font-bold lg:font-thin">{{ title }}</h2>

    <!-- carousel with pictures to click -->

    <div @click="toggleChecked" class="carousel">
      <div class="carousel-item my-4 mx-1">
        <img
          class="cursor-pointer"
          src="..\..\assets\Picture_swipe\Genre\Fantasy.png"
          alt="pic"
          @click="$emit('myEvent', 'fantasy')"
        />
      </div>

      <div class="carousel-item my-4 mx-1">
        <img
          class="cursor-pointer"
          src="..\..\assets\Picture_swipe\Genre\Horror.png"
          alt="pic"
          @click="$emit('myEvent', 'horror')"
        />
      </div>

      <div class="carousel-item my-4 mx-1">
        <img
          class="cursor-pointer"
          src="..\..\assets\Picture_swipe\Genre\Romance.png"
          alt="pic"
          @click="$emit('myEvent', 'romance')"
        />
      </div>

      <div class="carousel-item my-4 mx-1">
        <img
          class="cursor-pointer"
          src="..\..\assets\Picture_swipe\Genre\Science fiction.png"
          alt="pic"
          @click="$emit('myEvent', 'fiction')"
        />
      </div>

      <div class="carousel-item my-4 mx-1">
        <img
          class="cursor-pointer"
          src="..\..\assets\Picture_swipe\Genre\Thriller.png"
          alt="pic"
          @click="$emit('myEvent', 'thriller')"
        />
      </div>

      <div class="carousel-item my-4 mx-1">
        <img
          class="cursor-pointer"
          src="..\..\assets\Picture_swipe\Genre\space.png"
          alt="pic"
          @click="$emit('myEvent', 'space')"
        />
      </div>

    </div>

    <img class="m-4 lg:hidden mb-8" src="..\..\assets\icons\Streck.png" alt="line" />
    
  </div>
</template>

<script>
export default {
  name: "PicGenre",
  emits: ["myEvent"],
  data() {
    return {
      title: "Genre",
      genre: "",
      genreClicked: false,
    };
  },
  methods: {
    toggleChecked() {
      this.genreClicked = !this.genreClicked;
    },
  },
};
</script>
