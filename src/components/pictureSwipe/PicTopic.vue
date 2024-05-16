<template>
    <div class="flex flex-col items-center">
      <h2 class="mx-2  text-3xl font-quattrocento">{{ title }}</h2>
      <div class="carousel">
  
        <div class="carousel-item my-4 mx-1">
          <img class="" src="..\..\assets\Picture_swipe\Topic\Expedition, adventure.png" alt="pic" @click="$emit('myEvent1', 'adventure')">
        </div>
  
        <div class="carousel-item my-4 mx-1">
          <img class="" src="..\..\assets\Picture_swipe\Topic\Love.png" alt="pic" @click="$emit('myEvent1', 'love')">
        </div>
  
        <div class="carousel-item my-4 mx-1">
          <img class="" src="..\..\assets\Picture_swipe\Topic\Royal, kingdom, king, queen.png" alt="pic" @click="$emit('myEvent1', 'royal')">
        </div>
  
        <div class="carousel-item my-4 mx-1">
          <img class="" src="..\..\assets\Picture_swipe\Topic\technology.png" alt="pic" @click="$emit('myEvent1', 'technology')">
        </div>
  
        <div class="carousel-item my-4 mx-1">
          <img class="" src="..\..\assets\Picture_swipe\Topic\war.png" alt="pic" @click="$emit('myEvent1', 'war')">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "PicTopic",
    emits: ['myEvent1'],
    data() {
      return {
        title: "Topic",
        topic: "",
      };
    },
    methods: {},
  };
  </script>
  