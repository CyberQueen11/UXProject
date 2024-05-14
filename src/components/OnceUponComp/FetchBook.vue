<script>
export default {
  props: {
    book: Object,
    fetching: Boolean,
  },
};
</script>

<template>
  <div v-if="book">
    <br />
    <img
        :src="
          'https://covers.openlibrary.org/b/isbn/' + book.isbn + '-M.jpg'
        "
        alt="book cover"
      />
    <h3>Title: {{ book.title }}</h3>
    <p>Author: {{ book.author }}</p>
<!--     <p>ISBN: {{ book.isbn }}</p> -->
    <p>Publish Year: {{ book.publish_year }}</p>
  </div>
  <div v-else-if="fetching">
    <p>Loading...</p>
  </div>

</template>
