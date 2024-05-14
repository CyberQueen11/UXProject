<script>
import SelectDropdown from "./SelectDropdown.vue";
import { eras } from "./lists/eras.js";
import { characterRoles } from "./lists/characterRoles.js";
import { places } from "./lists/places.js";
import FetchBook from "./FetchBook.vue";

export default {
  components: {
    SelectDropdown,
    FetchBook,
  },
  data() {
    return {
      selectedEra: null,
      selectedCharacter: null,
      selectedPlace: null,
      book: null,
      fetching: false,
      eras: eras,
      characterRoles: characterRoles,
      places: places,
    };
  },
  methods: {
    async fetchData() {
      this.book = null;
      this.fetching = true;
      const openlibraryUrl = "https://openlibrary.org/search.json?";
      const LIMIT = 500;
      let offset = 0;
      let numFound = 0;
      let maxSearchNum = 5000;

      do {
        console.log(`Fetching data from Open Library with offset: ${offset}`);

        // Construct the URL based on parameters
        let url = `${openlibraryUrl}language=eng&limit=${LIMIT}&offset=${offset}`;
        if (this.selectedEra) {
          url += `&time=${this.selectedEra}`;
        }
        if (this.selectedCharacter) {
          url += `&subject=${this.selectedCharacter}`;
        }
        if (this.selectedPlace) {
          url += `&place=${this.selectedPlace}`;
        }

        let resp = await fetch(url);
        let json = await resp.json();
        console.log(url);

        if (resp.ok) {
          numFound = json.numFound;

          if (numFound > 0) {
            console.log(`${numFound} books found`);

            //Check if book has a cover
            while (this.book === null) {
              const randomIndex = Math.floor(Math.random() * numFound);
              const randomBook = json.docs[randomIndex];

              console.log("coverNum " + randomBook.cover_i);

              if (randomBook.cover_i) {
                console.log("Creating book...");
                const newBook = {
                  title: randomBook.title,
                  author: randomBook.author_name
                    ? randomBook.author_name[0]
                    : "Unknown",
                  isbn: randomBook.isbn ? randomBook.isbn[0] : "Unknown",
                  publish_year: randomBook.publish_year
                    ? randomBook.publish_year[0]
                    : "Unknown",
                };

                this.book = newBook;
              } else {
                console.log("No cover found, searching again....");
              }
            }

            this.fetching = false;
          } else {
            console.log("No items found");
            this.fetching = false;

            return;
          }

          if (numFound < maxSearchNum) {
            maxSearchNum = numFound;
          }

          offset += LIMIT;
        } else {
          console.log("Error fetching data:", json.error);
          return;
        }
      } while (offset < maxSearchNum);
    },

    handleEraSelection(selectedValue) {
      this.selectedEra = selectedValue;
    },

    handleCharacterSelection(selectedValue) {
      this.selectedCharacter = selectedValue;
    },

    handlePlaceSelection(selectedValue) {
      this.selectedPlace = selectedValue;
    },
  },
};
</script>

<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Quattrocento:wght@400;700&display=swap"
    rel="stylesheet"
  />

  <SelectDropdown
    label="Once upon a time in the era of "
    placeholder="Pick an era"
    :items="eras"
    v-model="selectedEra"
    @update:selected="handleEraSelection"
  />

  <SelectDropdown
    label="There was a "
    placeholder="Pick your character"
    :items="characterRoles"
    v-model="selectedCharacter"
    @update:selected="handleCharacterSelection"
  />

  <SelectDropdown
    label="Who lived in "
    placeholder="Pick a place"
    :items="places"
    v-model="selectedPlace"
    @update:selected="handlePlaceSelection"
  />

  <button
    class="btn btn-md md:btn-md lg:btn-lg mt-[5vw] custom-bg-red text-white font-quattrocento"
    @click="fetchData"
  >
    Reveal the book
  </button>

  <FetchBook :book="book" :fetching="fetching" />
</template>