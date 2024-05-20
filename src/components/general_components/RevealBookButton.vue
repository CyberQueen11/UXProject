<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink
  },

  props: {
    book: Object,
    label: String,
    showButton: Boolean
  },
};
</script>

<template>
  
  <!-- Change "name: 'Home'" to RevealBookPage when done -->
  <RouterLink :to="{ name: 'Show Result', query: { book: JSON.stringify(book) } }">
    <input
      type="button"
      class="btn btn-md md:btn-md lg:btn-lg mt-[5vw] lg:mt-[1vw] custom-bg-red text-white font-quattrocento w-auto"
      :value="label"
      v-if="showButton"
    />
    <input
    disabled
      type="button"
      class="btn btn-md md:btn-md lg:btn-lg mt-[5vw] lg:mt-[1vw] custom-bg-red text-white font-quattrocento w-auto"
      :value="label"
      v-else
    />
  </RouterLink>
</template>
