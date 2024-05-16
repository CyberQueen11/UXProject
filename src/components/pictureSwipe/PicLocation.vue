<template>
    <div class="">
      <h2 class="mx-2">{{ title }}</h2>
      <div class="carousel">
        <div class="carousel-item my-4 mx-1">
          <img class="" src="https://placeholder.pics/svg/160x200" alt="pic" @click="$emit('myEvent2', 'africa')">
        </div>
  
        <div class="carousel-item my-4 mx-1">
          <img class="" src="https://placeholder.pics/svg/160x200" alt="pic" @click="$emit('myEvent2', 'asia')">
        </div>
  
        <div class="carousel-item my-4 mx-1">
          <img class="" src="https://placeholder.pics/svg/160x200" alt="pic" @click="$emit('myEvent2', 'austrailia')">
        </div>
  
        <div class="carousel-item my-4 mx-1">
          <img class="" src="https://placeholder.pics/svg/160x200" alt="pic" @click="$emit('myEvent2', 'europe')">
        </div>
  
        <div class="carousel-item my-4 mx-1">
          <img class="" src="https://placeholder.pics/svg/160x200" alt="pic" @click="$emit('myEvent2', 'america')">
        </div>
  
        <div class="carousel-item my-4 mx-1">
          <img class="" src="https://placeholder.pics/svg/160x200" alt="pic" @click="$emit('myEvent2', 'america')">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "PicContain",
    data() {
      return {
        title: "Location",
        location: "",
      };
    },
    methods: {},
  };
  </script>
  