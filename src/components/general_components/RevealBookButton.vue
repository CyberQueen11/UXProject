<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
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
  <div>
    <!-- Conditionally render RouterLink only when the button should be enabled -->
    <RouterLink
      v-if="showButton || mobileButton"
      :to="{ name: 'Show Result OP', query: { book: JSON.stringify(book) } }"
    >
      <input
        type="button"
        class="btn btn-md md:btn-md lg:btn-lg mt-[5vw] lg:mt-[1vw] custom-bg-red text-white font-quattrocento w-auto"
        :value="label"
      />
    </RouterLink>

    <!-- Render a disabled button when the conditions are not met -->
    <input
      v-else
      disabled
      type="button"
      class="btn btn-md md:btn-md lg:btn-lg mt-[5vw] lg:mt-[1vw] custom-bg-red text-white font-quattrocento w-auto"
      :value="label"
    />
  </div>
</template>
