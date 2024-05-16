<template>
    <div class="flex flex-col items-center">
      <h2 class="mx-2  text-3xl font-quattrocento">{{ title }}</h2>
      <div class="carousel">
        <div class="carousel-item my-4 mx-1">
          <img class="" src="..\..\assets\Picture_swipe\Time period\1600.png" alt="pic" @click="$emit('myEvent3', '1600')">
        </div>
  
        <div class="carousel-item my-4 mx-1">
          <img class="" src="..\..\assets\Picture_swipe\Time period\1800.png" alt="pic" @click="$emit('myEvent3', '1800')">
        </div>
  
        <div class="carousel-item my-4 mx-1">
          <img class="" src="..\..\assets\Picture_swipe\Time period\1920.png" alt="pic" @click="$emit('myEvent3', '1920')">
        </div>
  
        <div class="carousel-item my-4 mx-1">
          <img class="" src="..\..\assets\Picture_swipe\Time period\1960.png" alt="pic" @click="$emit('myEvent3', '1960')">
        </div>
  
        <div class="carousel-item my-4 mx-1">
          <img class="" src="..\..\assets\Picture_swipe\Time period\1980.png" alt="pic" @click="$emit('myEvent3', '1980')">
        </div>
  
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "PicTime",
    emits: ['myEvent3'],
    data() {
      return {
        title: "Time period",
        genre: "",
      };
    },
    methods: {},
  };
  </script>
  