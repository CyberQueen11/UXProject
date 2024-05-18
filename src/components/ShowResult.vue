<template>
  <div class="flex flex-col items-center">
    <!-- header -->
    <div class="bg-darkblue w-full h-36 flex items-center justify-center mt-24">
      <h1 class="font-Quattrocento text-[39px] text-creamywhite">
        Your next book!
      </h1>
      <!-- cover holder -->
    </div>
    <div class="relative flex flex-col items-center my-4">
      <img class="z-0" src="../assets/icons/Vector 1.png" alt="vector" />
      <img
        class="absolute z-1 top-8 left-8 w-40"
        :src="`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`"
        alt="Book cover"
      />
    </div>
    <!-- book-info -->
    <div class="flex flex-col items-start text-black w-5/6">
      <p class="mb-6"><strong>Summary:</strong> <br />{{ book.summary }}</p>
      <p class="mb-6">
        <strong>Title:</strong> {{ book.title }}<br />
        <strong>By:</strong> {{ book.author }}
      </p>
      <p class="additional-info">
        <strong>Language:</strong> {{ book.language }}<br />
        <strong>Publish date:</strong> {{ book.publish_year }}<br />
        <strong>Pages:</strong> {{ book.pages }}<br />
        <strong>ISBN:</strong> {{ book.isbn }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
};
</script>
