<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink
  },

  props: {
    book: Object,
    label: String
  },
};
</script>

<template>
  
  <!-- Change "name: 'Home'" to RevealBookPage when done -->
  <RouterLink :to="{ name: 'Home' }">
    <input
      type="button"
      class="btn btn-md md:btn-md lg:btn-lg mt-[5vw] lg:mt-[1vw] custom-bg-red text-white font-quattrocento w-auto"
      :value="label"
    />
  </RouterLink>
</template>
