<template>
    <div class="">
      <h2 class="mx-2">{{ title }}</h2>
      <div class="carousel">
        <div class="carousel-item my-4 mx-1">
          <img class="" src="https://placeholder.pics/svg/160x200" alt="pic" @click="$emit('myEvent3', '1600')">
        </div>
  
        <div class="carousel-item my-4 mx-1">
          <img class="" src="https://placeholder.pics/svg/160x200" alt="pic" @click="$emit('myEvent3', '1800')">
        </div>
  
        <div class="carousel-item my-4 mx-1">
          <img class="" src="https://placeholder.pics/svg/160x200" alt="pic" @click="$emit('myEvent3', '1920')">
        </div>
  
        <div class="carousel-item my-4 mx-1">
          <img class="" src="https://placeholder.pics/svg/160x200" alt="pic" @click="$emit('myEvent3', '1960')">
        </div>
  
        <div class="carousel-item my-4 mx-1">
          <img class="" src="https://placeholder.pics/svg/160x200" alt="pic" @click="$emit('myEvent3', '1980')">
        </div>
  
        <div class="carousel-item my-4 mx-1">
          <img class="" src="https://placeholder.pics/svg/160x200" alt="pic" @click="$emit('myEvent3', '2000')">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "PicContain",
    data() {
      return {
        title: "Time",
        genre: "",
      };
    },
    methods: {},
  };
  </script>
  