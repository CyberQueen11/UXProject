<script>
import RevealBookButton from "../general_components/RevealBookButton.vue";

export default {
  components: {
    RevealBookButton,
  },
  props: {
    book: Object,
  },
};
</script>
<template>
  <div v-if="book" class="hidden lg:flex flex-col absolute w-5/6 placement items-center">
    <img
      :src="'https://covers.openlibrary.org/b/isbn/' + book.isbn + '-M.jpg'"
      alt="book cover"
    />

    <RevealBookButton :book="book" :showOnceUponBook="true"/>
  </div>
  <div
    v-else
    class="hidden lg:flex flex-col justify-center text-center absolute w-[170px] h-[250px] placement border border-black z-20 p-3"
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
</style>
