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
      <PicGenre @my-event="myGenre" />
      <PicTopic @my-event1="myTopic" />
      <PicLocation @my-event2="myLocation" />
      <PicTime @my-event3="myTime" />
      
      <div>
      <button
        class="btn btn-wide bg-indigo-600 text-white text-lg m-2 content-center"
        @click="getBookBySubjectAndMore(genre, topic, location)"
      >
        Reveal book
      </button>
    </div>

    </div>
    <AboutButton />
  </div>
</template>

<script>
import PicGenre from "../components/pictureSwipe/PicGenre.vue";
import PicTopic from "../components/pictureSwipe/PicTopic.vue";
import PicLocation from "../components/pictureSwipe/PicLocation.vue";
import PicTime from "../components/pictureSwipe/PicTime.vue";
import HomeButton from "@/components/general_components/HomeButton.vue";
import AboutButton from "@/components/general_components/AboutButton.vue";

export default {
  name: "App",
  components: { PicGenre, PicTopic, PicLocation, PicTime, HomeButton, AboutButton },
  data() {
    return {
      title: "Choose one image in each category",
      genre: "",
      topic: "",
      location: "",
      time: "",
    };
  },
  methods: {
    myGenre(word) {
      this.genre = word;
      console.log(this.genre);
    },
    myTopic(word) {
      this.topic = word;
      console.log(this.topic);
    },
    myLocation(word) {
      this.location = word;
      console.log(this.location);
    },
    myTime(word) {
      this.time = word;
      console.log(this.time);
    },
    async getBookBySubjectAndMore(genre, topic, place) {
      let resp = await fetch(
        `https://openlibrary.org/search.json?subject=${genre}+${topic}+${place}&fields=key,title,author_name&limit=1`
      );
      let json = await resp.json();
      let check = json.docs[0].title;
      console.log(check);
    },
  },
};
</script>
