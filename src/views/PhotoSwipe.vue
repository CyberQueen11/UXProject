<template>
  <div class="flex flex-col items-center">
    <HomeButton class="m-4" />

    <div class="relative flex justify-center mt-20 lg:mt-32">
      <h2 class="font-quattrocento custom-text-red text-2xl lg:text-4xl">
        Picture swipe
      </h2>
    </div>

    <img class="h-48 w-64" src="../assets/icons/Pic_swipe.png" alt="" />

    <div class="relative flex justify-center">
      <p class="h-auto text-[16px] custom-text-blue font-redHatDisplay">
        {{ title }}
      </p>
    </div>
    <div class="m-4 flex flex-col items-center">
      <img
        class="m-4 hidden lg:block" v-if="!showChecked"
        src="..\assets\icons\ph_circle-thin.png"
        alt="circle"
      />

      <img class="m-4 hidden lg:block" v-if="showChecked" src="..\assets\icons\ph_circle-thin-1.png" alt="">

      <PicGenre @my-event="myGenre" />
      <img class="m-4 lg:hidden" src="..\assets\icons\Streck.png" alt="line" />

      <img
        class="m-4 hidden lg:block"
        src="..\assets\icons\ph_circle-thin.png"
        alt="circle"
      />
      <PicTopic @my-event1="myTopic" />
      <img class="m-4 lg:hidden" src="..\assets\icons\Streck.png" alt="line" />

      <img
        class="m-4 hidden lg:block"
        src="..\assets\icons\ph_circle-thin.png"
        alt="circle"
      />
      <PicLocation @my-event2="myLocation" />
      <img class="m-4 lg:hidden" src="..\assets\icons\Streck.png" alt="line" />

      <img
        class="m-4 hidden lg:block"
        src="..\assets\icons\ph_circle-thin.png"
        alt="circle"
      />
      <PicTime @my-event3="myTime" />
      <img class="m-4 lg:hidden" src="..\assets\icons\Streck.png" alt="line" />

      <div>
        <RevealBookButton />
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
import RevealBookButton from "@/components/general_components/RevealBookButton.vue";

export default {
  name: "App",
  components: {
    PicGenre,
    PicTopic,
    PicLocation,
    PicTime,
    HomeButton,
    AboutButton,
    RevealBookButton,
  },
  data() {
    return {
      title: "Choose one image in each category",
      genre: "",
      topic: "",
      location: "",
      time: "",
      showChecked: false
    };
  },
  methods: {
    toggleChecked() {
      this.showChecked = !this.showChecked
      console.log(this.showChecked)
    },
    myGenre(word) {
      this.genre = word;
      this.toggleChecked()
      console.log(this.genre);
    },
    myTopic(word) {
      this.topic = word;
      this.toggleChecked()
      console.log(this.topic);
    },
    myLocation(word) {
      this.location = word;
      this.toggleChecked()
      console.log(this.location);
    },
    myTime(word) {
      this.time = word;
      this.toggleChecked()
      console.log(this.time);
    },
    async getBookBySubjectAndMore(genre, topic, place) {
      let resp = await fetch(
        `https://openlibrary.org/search.json?subject=${genre}+${topic}+${place}+&fields=key,title,author_name&limit=1`
      );
      let json = await resp.json();
      let check = json.docs[0].title;
      console.log(check);
    },
  },
};
</script>
