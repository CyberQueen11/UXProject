<script setup>
import DropMenuItem from "./DropMenuItem.vue";
import { characterRoles } from "./lists/characterRoles.js";
import { eras } from "./lists/eras.js";

let selectedEra = null;
let selectedCharacter = null;
let selectedPlace = null;

function fetchSelectedItemData(selectedEra, selectedCharacter, selectedPlace) {
  if (selectedEra) {
    selectedEra = event;
    console.log($event.target.value);
    // fetchEraData(selectedEra);
  } else if (selectedCharacter) {
    // fetchCharacterData(selectedCharacter);
  } else if (selectedPlace) {
    // fetchPlaceData(selectedPlace);
  } else if (selectedEra && selectedCharacter && selectedPlace) {
    //fetchAllData(selectedEra, selectedCharacter, selectedPlace)
  } else {
    // Handle case where not all selections are made
  }
}

//Only for TEST
function handleSelection(event, type) {
  const value = event.target.value;
  switch (type) {
    case "era":
      selectedEra = value;
      console.log(selectedEra);
      break;
    case "character":
      selectedCharacter = value;
      console.log(selectedCharacter);
      break;
    case "place":
      selectedPlace = value;
      console.log(selectedPlace);
      break;
    default:
    console.log("There was a problem reading the input data...")
      break;
  }
}
</script>

<template>
  <DropMenuItem>
    <template #text>
      Once upon a time in the era of
      <select
        class="select w-full max-w-xs"
        @change="handleSelection($event, 'era')"
      >
        <!-- @change="selectedEra = $event.target.value -->
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
        @change="handleSelection($event, 'character')"
      >
        <!-- @change="selectedCharacter = $event.target.value -->
        <option disabled selected>Pick your era</option>
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
        @change="handleSelection($event, 'place')"
      >
        <!-- @change="selectedPlace = $event.target.value -->
        <option disabled selected>Pick the place</option>
        <!--<option v-for="character in characterRoles" :key="character.value" :value="character.value">{{ character.label }}</option>-->
      </select>
    </template>
  </DropMenuItem>

  <button
    @click="
      fetchSelectedItemData(selectedEra, selectedCharacter, selectedPlace)
    "
  >
    Reveal the book
  </button>
</template>
