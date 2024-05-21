<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink
  },

  props: {
    book: Object,
    label: String,
    showButton: Boolean,
    mobileButton: Boolean,
  },
};
</script>

<template>
  
  <!-- Change "name: 'Home'" to RevealBookPage when done -->
  <RouterLink :to="{ name: 'Show Result OP', query: { book: JSON.stringify(book) } }">
    <input
      type="button"
      class="btn btn-md md:btn-md lg:btn-lg mt-[5vw] lg:mt-[1vw] custom-bg-red text-white font-quattrocento w-auto"
      :value="label"
      v-if="showButton"
    />
    <input
      type="button"
      class="btn btn-md md:btn-md lg:btn-lg mt-[5vw] lg:mt-[1vw] custom-bg-red text-white font-quattrocento w-auto"
      :value="label"
      v-else-if="mobileButton"
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
