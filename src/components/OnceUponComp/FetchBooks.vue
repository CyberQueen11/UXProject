<script >
export default {
  props: {
    books: Array,
    fetching: Boolean
  }
}
</script>

<template>
  <div v-if="books && books.length > 0">
    <h2>Books Found: {{ books.length }}</h2>
    <div v-for="book in books">
      <h3>{{ book.title }}</h3>
      <p>Author: {{ book.author }}</p>
    </div>
  </div>
  <div v-else-if="fetching">
    <p>Loading...</p>
  </div>

</template>
