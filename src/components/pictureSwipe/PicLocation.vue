<template>
  <div class="flex flex-col items-center">
    <img
      class="m-4 hidden lg:block"
      v-if="!locationClicked"
      src="..\..\assets\icons\image3.png"
      alt="circle"
    />
    <img
      class="m-4 hidden lg:block"
      v-else
      src="..\..\assets\icons\ph_circle-thin-1.png"
      alt="checked circle"
    />

    <p class="mx-2 text-3xl font-quattrocento font-bold lg:font-thin">{{ title }}</p>

    <div @click="toggleChecked" class="carousel">
      <div class="carousel-item my-4 mx-1">
        <img
          class="cursor-pointer"
          src="..\..\assets\Picture_swipe\Location\africa.png"
          alt="pic"
          @click="$emit('myEvent2', 'africa')"
        />
      </div>

      <div class="carousel-item my-4 mx-1">
        <img
          class="cursor-pointer"
          src="..\..\assets\Picture_swipe\Location\asia.png"
          alt="pic"
          @click="$emit('myEvent2', 'asia')"
        />
      </div>

      <div class="carousel-item my-4 mx-1">
        <img
          class="cursor-pointer"
          src="..\..\assets\Picture_swipe\Location\Euorpa.png"
          alt="pic"
          @click="$emit('myEvent2', 'europe')"
        />
      </div>

      <div class="carousel-item my-4 mx-1">
        <img
          class="cursor-pointer"
          src="..\..\assets\Picture_swipe\Location\North america.png"
          alt="pic"
          @click="$emit('myEvent2', 'america')"
        />
      </div>

      <div class="carousel-item my-4 mx-1">
        <img
          class="cursor-pointer"
          src="..\..\assets\Picture_swipe\Location\South america.png"
          alt="pic"
          @click="$emit('myEvent2', 'south america')"
        />
      </div>

      <div class="carousel-item my-4 mx-1">
        <img
          class="cursor-pointer"
          src="..\..\assets\Picture_swipe\Location\Australia.png"
          alt="pic"
          @click="$emit('myEvent2', 'austrailia')"
        />
      </div>
    </div>

    <img class="m-4 lg:hidden mb-8" src="..\..\assets\icons\Streck.png" alt="line" />
    
  </div>
</template>

<script>
export default {
  name: "PicLocation",
  emits: ["myEvent2"],
  data() {
    return {
      title: "Location",
      location: "",
      locationClicked: false,
    };
  },
  methods: {
    toggleChecked() {
      this.locationClicked = !this.locationClicked;
    },
  },
};
</script>
