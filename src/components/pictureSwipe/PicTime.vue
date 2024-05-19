<template>
  <div class="flex flex-col items-center">
    <img
      class="m-4 hidden lg:block"
      v-if="!timeClicked"
      src="..\..\assets\icons\image4.png"
      alt="circle"
    />
    <img
      class="m-4 hidden lg:block"
      v-else
      src="..\..\assets\icons\ph_circle-thin-1.png"
      alt="checked circle"
    />

    <h2 class="mx-2 text-3xl font-quattrocento font-bold lg:font-thin">{{ title }}</h2>

    <div @click="toggleChecked" class="carousel">
      <div class="carousel-item my-4 mx-1">
        <img
          class="cursor-pointer"
          src="..\..\assets\Picture_swipe\Time period\1600.png"
          alt="pic"
          @click="$emit('myEvent3', '1600')"
        />
      </div>

      <div class="carousel-item my-4 mx-1">
        <img
          class="cursor-pointer"
          src="..\..\assets\Picture_swipe\Time period\1800.png"
          alt="pic"
          @click="$emit('myEvent3', '1800')"
        />
      </div>

      <div class="carousel-item my-4 mx-1">
        <img
          class="cursor-pointer"
          src="..\..\assets\Picture_swipe\Time period\1920.png"
          alt="pic"
          @click="$emit('myEvent3', '1920')"
        />
      </div>

      <div class="carousel-item my-4 mx-1">
        <img
          class="cursor-pointer"
          src="..\..\assets\Picture_swipe\Time period\1960.png"
          alt="pic"
          @click="$emit('myEvent3', '1960')"
        />
      </div>

      <div class="carousel-item my-4 mx-1">
        <img
          class="cursor-pointer"
          src="..\..\assets\Picture_swipe\Time period\1980.png"
          alt="pic"
          @click="$emit('myEvent3', '1980')"
        />
      </div>
    </div>

    <img class="m-4 lg:hidden mb-8" src="..\..\assets\icons\Streck.png" alt="line" />
    
  </div>
</template>

<script>
export default {
  name: "PicTime",
  emits: ["myEvent3"],
  data() {
    return {
      title: "Time period",
      genre: "",
      timeClicked: false,
    };
  },
  methods: {
    toggleChecked() {
      this.timeClicked = !this.timeClicked;
    },
  },
};
</script>
