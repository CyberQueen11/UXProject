<script>
import SelectDropdown from "./SelectDropdown.vue";
import { eras } from "./lists/eras.js";
import { characterRoles } from "./lists/characterRoles.js";
import { places } from "./lists/places.js";
import BookCoverReveal from "./BookCoverReveal.vue";
import RevealBookButton from "../general_components/RevealBookButton.vue";
import { useCharacterStore } from "@/stores/CharacterStore";
import { usePlaceStore } from "@/stores/PlaceStore";
import { fetchData } from "../../utils/fetchData.js";
import { fetchSubjects } from "./fetches/fetchSubjects";
import { fetchPlaces } from "./fetches/fetchPlaces";

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
      showButton: true,
      mobileButton: true,
      noItemsText: null,
    };
  },
  setup() {
    const characterStore = useCharacterStore();
    const placeStore = usePlaceStore();

    return { characterStore, placeStore };
  },

  methods: {
    // Method to fetch data based on selections
    async fetchData() {
      await fetchData(
        this.selectedEra,
        this.selectedCharacter,
        this.selectedPlace,
        null,
        (newBook) => (this.book = newBook),
        (isFetching) => (this.fetching = isFetching),
        (showButton) => (this.showButton = showButton), // Update button visibility
        (mobileButton) => (this.mobileButton = mobileButton), // Update mobile button visibility
        (noItemsText) => (this.noItemsText = noItemsText)
      );
    },

    async handleEraSelection(selectedValue) {
      this.selectedEra = selectedValue;
      this.mobileButton = false;
      try {
        this.characterLoading = true;
        // Call the API to get subjects based on the selected era
        const subjectSet = await fetchSubjects(selectedValue);

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
      this.mobileButton = true;
    },

    async handleCharacterSelection(selectedValue) {
      this.mobileButton = false;
      this.selectedCharacter = selectedValue;
      this.placeLoading = true;
      const placeSet = await fetchPlaces(this.selectedEra, selectedValue);

      let placesList = this.placeStore.places;

      // Clear the place list
      placesList.splice(0, placesList.length);

      const placesWithLabel = Array.from(placeSet).map((place) => ({
        value: place.value,
        label: place.label,
        exists: true,
      }));

      //Add places
      placesList.push(...placesWithLabel);

      //Update placeStore
      this.placeStore.updatePlaces(placesList);

      this.placeLoading = false;
      this.mobileButton = true;
    },

    handlePlaceSelection(selectedValue) {
      this.selectedPlace = selectedValue;
    },
  },
};
</script>

<template>
  <!-- Dropdown for selecting an era -->
  <SelectDropdown
    label="Once upon a time in the era of "
    placeholder="Pick an era"
    :items="eras"
    v-model="selectedEra"
    @update:selected="handleEraSelection"
  />

  <!-- Dropdown for selecting a character -->
  <SelectDropdown
    label="There was a "
    placeholder="Pick your character"
    :items="characterStore.characters"
    v-model="selectedCharacter"
    @update:selected="handleCharacterSelection"
    :characterLoading="characterLoading"
  />

  <!-- Dropdown for selecting a place, hidden on mobile -->
  <SelectDropdown
    class="hidden lg:block"
    label="Who lived in "
    placeholder="Pick a place"
    :items="placeStore.places"
    v-model="selectedPlace"
    @update:selected="handlePlaceSelection"
    :placeLoading="placeLoading || characterLoading"
  />

  <!-- Dropdown for selecting a place, visible on mobile and fetch data immediately -->
  <SelectDropdown
    class="lg:hidden"
    label="Who lived in "
    placeholder="Pick a place"
    :items="placeStore.places"
    v-model="selectedPlace"
    @update:selected="fetchData"
    :placeLoading="placeLoading || characterLoading"
  />

  <!-- DESKTOP reveal button -->
  <div class="hidden lg:block">
    <button
      class="btn btn-md md:btn-md lg:btn-lg mt-[5vw] lg:mt-[1vw] custom-bg-red text-white font-quattrocento"
      v-if="characterLoading || placeLoading"
      disabled
    >
      Reveal the book
    </button>
    <button
      class="btn btn-md md:btn-md lg:btn-lg mt-[5vw] lg:mt-[1vw] custom-bg-red text-white font-quattrocento"
      v-else
      @click="fetchData"
    >
      Reveal the book
    </button>
    
    <!-- Component to reveal the book cover -->
    <BookCoverReveal
      :book="book"
      :fetching="fetching"
      :showButton="showButton"
    />
  </div>

  <!-- Reveal button for mobile -->
  <div class="lg:hidden">
    <RevealBookButton
      :book="book"
      label="Reveal the book"
      :mobileButton="mobileButton"
    />
  </div>
</template>
