<template>
    <h2 class="mx-2">{{ title }}</h2>
    <div class="carousel">
      <div class="carousel-item my-4 mx-1">
        <ClickPic subject="horror" />
      </div>
  
      <div class="carousel-item my-4 mx-1">
        <ClickPic subject="love" />
      </div>
  
      <div class="carousel-item my-4 mx-1">
        <ClickPic subject="fiction" />
      </div>
  
      <div class="carousel-item my-4 mx-1">
        <ClickPic subject="fiction" />
      </div>
  
      <div class="carousel-item my-4 mx-1">
        <ClickPic subject="fiction" />
      </div>
    </div>
  </template>
  
  <script>
  import ClickPic from './ClickPic.vue'
  
  export default {
    name: 'PicContain',
    components: { ClickPic },
    data() {
      return {
        title: 'Genre, Topic, Location, Time',
        genre: ''
      }
    },
    methods: {}
  }
  </script>