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
        data.docs.forEach((book, index) => {
          if (index < 3 && book.cover_i) {
            const newBook = {
              title: book.title,
              author: book.author_name ? book.author_name[0] : "Unknown",
              isbn: book.isbn ? book.isbn[0] : "Unknown",
              publish_year: book.publish_year
                ? book.publish_year[0]
                : "Unknown",
            };
            this.books.push(newBook);
          }
        });

        console.log("Books fetched:", this.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    },
    selectBook(book) {
      this.selectedBook = book.isbn;
      this.getBooks();
      this.books = [];
    },
  },
};
</script>

<template>
  <div class="container">
    <h4>Judge the book by its cover</h4>

    <div v-if="selectedBook.length" class="selected-book">
      <img
        :src="
          'https://covers.openlibrary.org/b/isbn/' + selectedBook + '-M.jpg'
        "
        alt="selected book"
      />
    </div>

    <p>Click on the book cover</p>

    <div
      v-if="books.length"
      v-for="book in books"
      :key="book.isbn"
      class="cover-holder"
    >
      <img
        @click="selectBook(book)"
        :src="'https://covers.openlibrary.org/b/isbn/' + book.isbn + '-M.jpg'"
        alt="cover"
      />
    </div>
    <div v-else>
      <h5>loading...</h5>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  h4 {
    color: rgb(79, 77, 77);
    margin: 1em auto 2em;
  }
}

.selected-book {
  margin-bottom: 20px;
}

.cover-holder {
  display: flex;
  display: inline;
  img {
    margin: 1em;
    width: 80px;
    height: 100px;
    cursor: pointer;
  }
}

.selected-book {
  img {
    margin: 0.1em;
    width: 80px;
    height: 100px;
  }
}

h5 {
  margin-top: 4em;
  font-size: large;
}
</style>
