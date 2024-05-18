<template>
  <!-- mobile design -->
  <div class="flex flex-col items-center block md:hidden">
    <!-- header -->
    <div class="bg-darkblue w-full h-36 flex items-center justify-center mt-24">
      <h1 class="font-Quattrocento text-[39px] text-creamywhite text-center">
        Your next <br />
        book!
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
    <div
      class="flex flex-col items-start text-black text-[18px] font-RedHatDisplay w-4/6"
    >
      <p class="mb-6"><strong>Summary:</strong> <br />{{ book.summary }}</p>
      <p class="mb-6">
        <strong>Title:</strong> {{ book.title }}<br />
        <strong>By:</strong> {{ book.author }}
      </p>
      <p>
        <strong>Language:</strong> {{ book.language }}<br />
        <strong>Publish date:</strong> {{ book.publish_year }}<br />
        <strong>Pages:</strong> {{ book.pages }}<br />
        <strong>ISBN:</strong> {{ book.isbn }}
      </p>
    </div>
  </div>

  <!-- desktop design -->

  <div class="hidden md:block">
    <!-- header -->
    <div
      class="bg-darkblue w-full h-40 flex items-center justify-center mt-[78px] mb-10"
    >
      <h1 class="font-Quattrocento text-[39px] text-creamywhite text-center">
        Your next book!
      </h1>
    </div>

    <!-- main section -->

    <div class="flex flex-row-reverse justify-center items-start mb-10">
      <!-- book-info -->
      <div class="flex flex-col text-black font-RedHatDisplay mt-10">
        <p class="mb-6">
          <strong>Title:</strong> {{ book.title }}<br />
          <strong>By:</strong> {{ book.author }}
        </p>
        <p>
          <strong>Language:</strong> {{ book.language }}<br />
          <strong>Publish date:</strong> {{ book.publish_year }}<br />
          <strong>Pages:</strong> {{ book.pages }}<br />
          <strong>ISBN:</strong> {{ book.isbn }}
        </p>
      </div>

      <!-- cover holder -->
      <div class="relative mx-60">
        <img class="z-0" src="../assets/icons/Vector 1.png" alt="vector" />
        <img
          class="absolute z-1 top-8 left-8 w-40"
          :src="`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`"
          alt="Book cover"
        />
      </div>

      <!-- book summary -->
      <div class="text-black font-RedHatDisplay mt-10">
        <p class=""><strong>Summary:</strong> <br />{{ book.summary }}</p>
      </div>
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
