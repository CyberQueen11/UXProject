<script>
import RevealBookButton from "../general_components/RevealBookButton.vue";

export default {
  components: {
    RevealBookButton,
  },
  props: {
    book: Object,
    fetching: Boolean,
    showButton: Boolean,
  },
};
</script>
<template>
  <!-- Display book cover and button if book object is available -->
  <div v-if="book" class="w-5/6 placement">
    <img
      :src="'https://covers.openlibrary.org/b/isbn/' + book.isbn + '-M.jpg'"
      alt="book cover"
    />

    <!-- RevealBookButton component to navigate to the book -->
    <RevealBookButton
      :book="book"
      label="Go to book"
      :showButton="showButton"
    />
  </div>

  <!-- Display loading message if data is being fetched -->
  <div v-else-if="fetching" class="w-[170px] h-[250px] placement p-3">
    <p>Loading...</p>
  </div>

  <!-- Display placeholder message if no book is selected and not fetching -->
  <div v-else class="w-[170px] h-[250px] placement border border-black p-3">
    <p class="font-redHatDisplay custom-lightblue text-[1.2vw]">
      Your next book <br />
      will be revealed here !
    </p>
  </div>
</template>

<style scoped>

/* Positioning class for the book display */
.placement {
  top: -3vw;
  left: 31vw;
}

div {
  @apply hidden lg:flex flex-col absolute justify-center text-center;
}
</style>
