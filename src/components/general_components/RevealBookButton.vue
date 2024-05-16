<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },

  props: {
    showOnceUponBook: Boolean,
    showPictureSwipeBook: Boolean,
    book: Object,
  },
};
</script>

<template>
  
  <!-- Change "name: 'Home'" to RevealBookPage when done -->
  <RouterLink :to="{ name: 'Home' }">
    <input
      v-if="showOnceUponBook"
      type="button"
      class="btn btn-md md:btn-md lg:btn-md mt-[5vw] lg:mt-[1vw] custom-bg-red text-white font-quattrocento w-[8vw]"
      value="Go to book"
    />
    <input
      v-if="showPictureSwipeBook"
      type="button"
      class="btn btn-md md:btn-md lg:btn-md mt-[5vw] lg:mt-[1vw] custom-bg-red text-white font-quattrocento w-[8vw]"
      value="Reveal book"
    />
  </RouterLink>
</template>
