<template>
  <div class="flex flex-col items-center">
    <img
      class="m-4 hidden lg:block"
      v-if="!topicClicked"
      src="..\..\assets\icons\image2.png"
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
          src="..\..\assets\Picture_swipe\Topic\Expedition, adventure.png"
          alt="pic"
          @click="$emit('myEvent1', 'adventure')"
        />
      </div>

      <div class="carousel-item my-4 mx-1">
        <img
          class="cursor-pointer"
          src="..\..\assets\Picture_swipe\Topic\Love.png"
          alt="pic"
          @click="$emit('myEvent1', 'love')"
        />
      </div>

      <div class="carousel-item my-4 mx-1">
        <img
          class="cursor-pointer"
          src="..\..\assets\Picture_swipe\Topic\Royal, kingdom, king, queen.png"
          alt="pic"
          @click="$emit('myEvent1', 'royal')"
        />
      </div>

      <div class="carousel-item my-4 mx-1">
        <img
          class="cursor-pointer"
          src="..\..\assets\Picture_swipe\Topic\technology.png"
          alt="pic"
          @click="$emit('myEvent1', 'technology')"
        />
      </div>

      <div class="carousel-item my-4 mx-1">
        <img
          class="cursor-pointer"
          src="..\..\assets\Picture_swipe\Topic\war.png"
          alt="pic"
          @click="$emit('myEvent1', 'war')"
        />
      </div>

      <div class="carousel-item my-4 mx-1">
        <img
          class="cursor-pointer"
          src="..\..\assets\Picture_swipe\Topic\future.png"
          alt="pic"
          @click="$emit('myEvent1', 'future')"
        />
      </div>
    </div>

    <img class="m-4 lg:hidden mb-8" src="..\..\assets\icons\Streck.png" alt="line" />
    
  </div>
</template>

<script>
export default {
  name: "PicTopic",
  emits: ["myEvent1"],
  data() {
    return {
      title: "Topic",
      topic: "",
      topicClicked: false,
    };
  },
  methods: {
    toggleChecked() {
      this.topicClicked = !this.topicClicked;
    },
  },
};
</script>
