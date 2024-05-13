<script setup>
import DropMenuItem from "./DropMenuItem.vue";
import { characterRoles } from "./lists/characterRoles.js";
import { eras } from "./lists/eras.js";
import { places } from "./lists/places.js";
import { ref } from "vue";
import FetchedBooks from "./FetchBooks.vue"; // Import the FetchedBooks component

let selectedEra = ref(null);
let selectedCharacter = ref(null);
let selectedPlace = ref(null);
let fetchedBooksArray = ref([]);
let fetchingBooks = ref(false);

async function fetchData(time, object, place) {
  const openlibraryUrl = "https://openlibrary.org/search.json?";
  const LIMIT = 500;
  let offset = 0;
  let numFound = 0;
  let maxSearchNum = 5000;

  do {
    console.log(`Fetching data from Open Library with offset: ${offset}`);

    // Construct the URL based on parameters
    let url = `${openlibraryUrl}time=${time}&language=eng&limit=${LIMIT}&offset=${offset}`;
    if (object) {
      url += `&subject=${object}`;
    }
    if (place) {
      url += `&place=${place}`;
    }

/*     const url = `${openlibraryUrl}time=${time}&subject=${object}&place=${place}&language=eng&limit=${LIMIT}&offset=${offset}`;
 */
    // Make the fetch request with the current offset
    let resp = await fetch(url);
    let json = await resp.json();

    // Check if the response is ok
    if (resp.ok) {
      numFound = json.numFound;
      if (numFound > 0) {
        console.log(`${numFound} books found`);

        json.docs.forEach((book) => {
            const newBook = {
              title: book.title,
              author: book.author_name ? book.author_name[0] : "Unknown",
              isbn: book.isbn ? book.isbn[0] : "Unknown",
              publish_year: book.publish_year
                ? book.publish_year[0]
                : "Unknown",
            };

            console.log(newBook);
        });
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
  
}

</script>

<template>
  <DropMenuItem>
    <template #text>
      Once upon a time in the era of
      <select
        class="select w-full max-w-xs"
        @change="selectedEra = $event.target.value"
      >
        <option disabled selected>Pick your era</option>
        <option v-for="era in eras" :key="era.value" :value="era.value">
          {{ era.label }}
        </option>
      </select>
    </template>
  </DropMenuItem>

  <DropMenuItem>
    <template #text>
      There was a
      <select
        class="select w-full max-w-xs"
        @change="selectedCharacter = $event.target.value"
      >
        <option disabled selected>Pick the character</option>
        <option
          v-for="character in characterRoles"
          :key="character.value"
          :value="character.value"
        >
          {{ character.label }}
        </option>
      </select>
    </template>
  </DropMenuItem>

  <DropMenuItem>
    <template #text>
      who lived in
      <select
        class="select w-full max-w-xs"
        @change="selectedPlace = $event.target.value"
      >
        <option disabled selected>Pick the place</option>
        <option v-for="place in places" :key="place.value" :value="place.value">
          {{ place.label }}
        </option>
      </select>
    </template>
  </DropMenuItem>

  <button @click="fetchData(selectedEra, selectedCharacter, selectedPlace)">
    Reveal the book
  </button>

  <FetchedBooks :books="fetchedBooksArray" :fetching="fetchingBooks" />
</template>
