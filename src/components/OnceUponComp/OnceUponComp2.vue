<script>
import SelectDropdown from "./SelectDropdown.vue";
import { eras } from "./lists/eras.js";
import { characterRoles } from "./lists/characterRoles.js";
import { places } from "./lists/places.js";
import { ref } from "vue";
/* import FetchedBooks from "./FetchBooks.vue"; // Import the FetchedBooks component
 */
export default {
  components: {
    SelectDropdown,
  },
  data() {
    return {
      selectedEra: null,
      selectedCharacter: null,
      selectedPlace: null,
      eras: eras,
      characterRoles: characterRoles,
      places: places,
    };
  },
  methods: {
    async fetchData() {
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

        /*     const url = `${openlibraryUrl}time=${time}&subject=${object}&place=${place}&language=eng&limit=${LIMIT}&offset=${offset}`;
         */
        // Make the fetch request with the current offset
        let resp = await fetch(url);
        let json = await resp.json();
        console.log(url);

        // Check if the response is ok
        if (resp.ok) {
          numFound = json.numFound;
          if (numFound > 0) {
            console.log(`${numFound} books found`);

            const randomIndex = Math.floor(Math.random() * numFound);
            const randomBook = json.docs[randomIndex];

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

            console.log(newBook);
            
          } else {
            console.log("No items found");
            return; // Exit the function if no items are found
          }

          if (numFound < maxSearchNum) {
            maxSearchNum = numFound;
          }

          // Increment the offset for the next request
          offset += LIMIT;
        } else {
          console.log("Error fetching data:", json.error);
          return; // Exit the function if there's an error
        }
      } while (offset < maxSearchNum); // Continue fetching until reached specified limit
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

  <button @click="fetchData">Reveal the book</button>

  <!--<FetchedBooks :books="fetchedBooksArray" :fetching="fetchingBooks" />-->
</template>
