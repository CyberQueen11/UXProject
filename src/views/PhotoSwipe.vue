<template>
  <div class="flex flex-col items-center">
    <HomeButton class="m-4" />

    <div class="relative flex justify-center mt-20 lg:mt-32">
      <h2 class="font-quattrocento custom-text-red text-2xl lg:text-4xl">
        Picture swipe
      </h2>
    </div>

    <img class="h-48 w-64" src="../assets/icons/Pic_swipe.png" alt="" />

    <h3>{{ title }}</h3>
    <div class="m-4">
      <PicGenre />
      <PicGenre />
      <PicGenre />
      <PicGenre />
      <GenerateButton />
    </div>
    <AboutButton />
  </div>
</template>

<script>
import PicGenre from "../components/pictureSwipe/PicGenre.vue";
import GenerateButton from "../components/pictureSwipe/GenerateButton.vue";
import HomeButton from "@/components/general_components/HomeButton.vue";
import AboutButton from "@/components/general_components/AboutButton.vue";

export default {
  name: "App",
  components: { PicGenre, GenerateButton, HomeButton, AboutButton },
  data() {
    return {
      title: "Choose one image in each category",
    };
  },
};
</script>
