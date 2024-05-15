<script>
export default {
  data() {
    return {
      books: [],
      selectedBook: [],
    };
  },
  mounted() {
    this.getBooks();
  },
  methods: {
    async getBooks() {
      try {
        const genres = [
          "fiction",
          "fantasy",
          "mystery",
          "romance",
          "science fiction",
          "thriller",
        ];

        const randomIndex = Math.floor(Math.random() * genres.length);
        const randomGenre = genres[randomIndex];
        const offset = Math.floor(Math.random() * 1000);

        const response = await fetch(
          `https://openlibrary.org/search.json?q=${randomGenre}&limit=10&offset=${offset}`
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();

        this.books = [];
        for (const book of data.docs) {
          const newBook = {
            title: book.title,
            author: book.author_name ? book.author_name[0] : "Unknown",
            isbn: book.isbn ? book.isbn[0] : "Unknown",
            publish_year: book.publish_year ? book.publish_year[0] : "Unknown",
          };
          const coverExists = await this.checkCoverExists(newBook.isbn);
          if (this.books.length < 3 && coverExists) {
            this.books.push(newBook);
          }
        }

        console.log("Books fetched:", this.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    },
    async checkCoverExists(isbn) {
      try {
        const response = await fetch(
          "https://covers.openlibrary.org/b/isbn/" +
            isbn +
            "-M.jpg?default=false"
        );
        return response.ok;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    selectBook(book) {
      this.selectedBook.push(book.isbn);
      this.getBooks();
      this.books = [];
    },
  },
};
</script>

<template>
  <header>
    <!-- mobile -->
    <div class="block lg:hidden">
      <div
        v-if="!selectedBook.length"
        class="flex flex-col items-center text-center mt-20 mb-4"
      >
        <h2 class="font-Quattrocento text-darkred text-[31px] mb-6">
          Judge the <br />book by its <br />cover
        </h2>
        <img src="../../assets/icons/Streck.png" alt="separator" />
      </div>
      <div
        v-if="selectedBook.length != 0"
        class="flex flex-col items-center text-center mt-20 mb-10"
      >
        <h4 class="font-Quattrocento text-darkred text-[20px]">
          Judge the <br />book by its <br />cover
        </h4>
      </div>
    </div>
    <!-- desktop -->
    <div class="hidden lg:block flex flex-col items-center text-center mt-40">
      <h2 class="font-Quattrocento text-darkred text-[31px] mb-6">
        Judge the book by its cover
      </h2>
    </div>
  </header>

  <!-- main section -->
  <main class="flex flex-col items-center">
    <!-- selected book -->
    <div v-if="selectedBook.length" class="relative">
      <img
        class="z-0 w-96"
        src="../../assets/icons/Judge_a_book.png"
        alt="overlap"
      />
      <img
        class="absolute z-1 top-0 left-32 w-32"
        :src="
          'https://covers.openlibrary.org/b/isbn/' +
          selectedBook[selectedBook.length - 1] +
          '-M.jpg'
        "
        alt="selected book"
      />
    </div>

    <!-- text -->
    <div class="flex flex-col items-center">
      <div v-if="!selectedBook.length" class="my-6">
        <p class="text-[16px] font-RedHatDisplay text-black">
          Choose ONE cover you prefer
        </p>
      </div>
      <div v-if="selectedBook.length == 1" class="my-6">
        <p class="text-[16px] font-RedHatDisplay text-black">
          Choose ONE more cover you prefer
        </p>
      </div>
      <div v-if="selectedBook.length == 2" class="my-6 text-center">
        <p class="text-[16px] font-RedHatDisplay text-black">
          Choose ONE more cover you prefer...
        </p>
        <p class="text-[16px] font-RedHatDisplay text-black">...the last one</p>
      </div>

      <!-- show new books -->
      <div class="flex">
        <div v-if="books.length" v-for="book in books" :key="book.isbn">
          <img
            class="w-32 h-40 mx-2"
            @click="selectBook(book)"
            :src="
              'https://covers.openlibrary.org/b/isbn/' +
              book.isbn +
              '-M.jpg?default=false'
            "
            alt="cover"
          />
        </div>
        <div v-else>
          <h5>loading...</h5>
        </div>
      </div>
    </div>
    <!-- footer -->
    <div v-if="!selectedBook.length" class="mt-20">
      <img
        class="w-56"
        src="../../assets/icons/Judge_a_book.png"
        alt="hammer"
      />
    </div>
    <div v-if="selectedBook.length != 0" class="my-32">
      <img src="../../assets/icons/Streck.png" alt="separator" />
    </div>
  </main>
</template>
