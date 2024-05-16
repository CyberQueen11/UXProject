<script>
import RevealBookButton from "../general_components/RevealBookButton.vue";

export default {
  components: {
    RevealBookButton,
  },
  props: {
    book: Object,
    fetching: Boolean,
  },
};
</script>
<template>
  <div
    v-if="book"
    class="w-5/6 placement"
  >
    <img
      :src="'https://covers.openlibrary.org/b/isbn/' + book.isbn + '-M.jpg'"
      alt="book cover"
    />

    <RevealBookButton :book="book" label="Go to book" />
  </div>
  <div
    v-else-if="fetching"
    class="w-[170px] h-[250px] placement p-3"
  >
    <p>Loading...</p>
  </div>
  <div
    v-else
    class="w-[170px] h-[250px] placement border border-black p-3"
  >
    <p class="font-redHatDisplay custom-lightblue text-[1.2vw]">
      Your next book <br />
      will be revealed here !
    </p>
  </div>
</template>

<style scoped>
.placement {
  top: -3vw;
  left: 31vw;
}

div {
  @apply hidden lg:flex flex-col absolute justify-center text-center;
}
</style>
