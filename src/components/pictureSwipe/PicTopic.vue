<template>
    <div class="">
      <h2 class="mx-2">{{ title }}</h2>
      <div class="carousel">
        <div class="carousel-item my-4 mx-1">
          <img class="" src="https://placeholder.pics/svg/160x200" alt="pic" @click="$emit('myEvent1', 'crime')">
        </div>
  
        <div class="carousel-item my-4 mx-1">
          <img class="" src="https://placeholder.pics/svg/160x200" alt="pic" @click="$emit('myEvent1', 'adventure')">
        </div>
  
        <div class="carousel-item my-4 mx-1">
          <img class="" src="https://placeholder.pics/svg/160x200" alt="pic" @click="$emit('myEvent1', 'love')">
        </div>
  
        <div class="carousel-item my-4 mx-1">
          <img class="" src="https://placeholder.pics/svg/160x200" alt="pic" @click="$emit('myEvent1', 'royal')">
        </div>
  
        <div class="carousel-item my-4 mx-1">
          <img class="" src="https://placeholder.pics/svg/160x200" alt="pic" @click="$emit('myEvent1', 'technology')">
        </div>
  
        <div class="carousel-item my-4 mx-1">
          <img class="" src="https://placeholder.pics/svg/160x200" alt="pic" @click="$emit('myEvent1', 'war')">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "PicContain",
    data() {
      return {
        title: "Topic",
        topic: "",
      };
    },
    methods: {},
  };
  </script>
  