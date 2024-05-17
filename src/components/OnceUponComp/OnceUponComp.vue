<script>
import SelectDropdown from "./SelectDropdown.vue";
import { eras } from "./lists/eras.js";
import { characterRoles } from "./lists/characterRoles.js";
import { places } from "./lists/places.js";
import BookCoverReveal from "./BookCoverReveal.vue";
import RevealBookButton from "../general_components/RevealBookButton.vue";
import { useCharacterStore } from "@/stores/CharacterStore";
import { usePlaceStore } from "@/stores/PlaceStore";

export default {
  components: {
    SelectDropdown,
    BookCoverReveal,
    RevealBookButton,
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
      characterLoading: false,
      placeLoading: false,
    };
  },

  setup() {
    const characterStore = useCharacterStore();
    const placeStore = usePlaceStore();

    return { characterStore, placeStore };
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

    async handleEraSelection(selectedValue) {
      this.selectedEra = selectedValue;
      try {
        this.characterLoading = true;
        // Call the API to get subjects based on the selected era
        const subjectSet = await this.fetchSubjects(selectedValue);

        console.log(subjectSet);
        // Update the character list based on the subjects
        this.characterStore.characters = this.characterStore.characters.map(
          (character) => {
            const searchWord = new RegExp(`\\b${character.value}\\b`, "i");
            const exists = Array.from(subjectSet).some((subject) =>
              searchWord.test(subject)
            );
            return { ...character, exists }; // Return the updated character object
          }
        );
      } catch (error) {
        console.error("Error fetching subjects:", error);
        // Handle error if fetchSubjects fails
      }
      this.characterLoading = false;
    },

    async handleCharacterSelection(selectedValue) {
      this.selectedCharacter = selectedValue
      this.placeLoading = true;
      const placeSet = await this.fetchPlaces(selectedValue);

      let placesList = this.placeStore.places;

      //Empty list
      placesList.splice(0, placesList.length);

      const placesWithLabel = Array.from(placeSet).map((place) => ({
        value: place.value,
        label: place.label,
        exists: true
      }));

      //Add places
      placesList.push(...placesWithLabel);

      //Update placeStore
      this.placeStore.updatePlaces(placesList);

      this.placeLoading = false;
    },

    handlePlaceSelection(selectedValue) {
      this.selectedPlace = selectedValue;
    },

    async fetchSubjects(selectedValue) {
      const subjectSet = new Set();
      const openlibraryURL = "https://openlibrary.org/search.json?";
      const LIMIT = 500;
      let offset = 0;
      let numFound = 0;
      let maxSearchNum = 1000;

      while (offset < maxSearchNum) {
        let eraURL = `${openlibraryURL}language=eng&limit=${LIMIT}&offset=${offset}&time=${selectedValue}`;

        let resp = await fetch(eraURL);
        let json = await resp.json();

        // Add each subject to the set list
        for (const element of json.docs) {
          if (element.subject && Array.isArray(element.subject)) {
            let subjects = element.subject;
            for (const subElement of subjects) {
              subjectSet.add(subElement);
            }
          }
        }

        if (json.numFound) {
          numFound = json.numFound;
          if (numFound < maxSearchNum) {
            maxSearchNum = numFound;
          }
        } else {
          console.log("There was no json.numFound");
          break;
        }

        offset += LIMIT;
      }

      return subjectSet;
    },

    async fetchPlaces(selectedValue) {
      const placeSet = new Set();
      const openlibraryUrl = "https://openlibrary.org/search.json?";
      let numFound = 0;

      console.log(this.selectedEra);
      let characterURL = `${openlibraryUrl}language=eng&time=${this.selectedEra}&subject=${selectedValue}`;

      let resp = await fetch(characterURL);
      let json = await resp.json();

      if (json.numFound) {
        numFound = json.numFound;
        console.log(`${numFound} books found`);
      } else {
        console.log("There were no books found");
      }

      // Add each place to the set list
      for (const element of json.docs) {
        if (element.place && Array.isArray(element.place)) {
          let places = element.place;
          for (const placeElement of places) {
            // Assuming placeElement has properties for both value and label
            let placeObject = {
              value: placeElement.toLowerCase(), // Replace with the actual property name for value
              label: placeElement, // Replace with the actual property name for label
            };

            placeSet.add(placeObject); // Add the place object to the list
          }
        }
      }

      return placeSet;
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
    :items="characterStore.characters"
    v-model="selectedCharacter"
    @update:selected="handleCharacterSelection"
    :characterLoading="characterLoading"
  />

  <SelectDropdown
    label="Who lived in "
    placeholder="Pick a place"
    :items="placeStore.places"
    v-model="selectedPlace"
    @update:selected="handlePlaceSelection"
    :placeLoading="placeLoading"
  />

  <!-- DESKTOP reveal button -->
  <div class="hidden lg:block">
    <button
      class="btn btn-md md:btn-md lg:btn-lg mt-[5vw] lg:mt-[1vw] custom-bg-red text-white font-quattrocento"
      @click="fetchData"
    >
      Reveal the book
    </button>
    <BookCoverReveal :book="book" :fetching="fetching" />
  </div>

  <div class="lg:hidden">
    <RevealBookButton :book="book" label="Reveal the book" />
  </div>
</template>
