<template>
  <h1 class="m-8 text-center font-bold">{{ title }}</h1>
  <div class="m-4">
    <PicGenre />
    <PicGenre />
    <PicGenre />
    <PicGenre />
    <GenerateButton />
  </div>
</template>

<script>
import PicGenre from "../components/pictureSwipe/PicGenre.vue";
import GenerateButton from "../components/pictureSwipe/GenerateButton.vue";

export default {
  name: "App",
  components: { PicGenre, GenerateButton },
  data() {
    return {
      title: "Choose one image in each category",
    };
  },
};
</script>
