<script setup>
import DropMenuItem from "./DropMenuItem.vue";
import { characterRoles } from "./lists/characterRoles.js";
import { eras } from "./lists/eras.js";
</script>

<template>
  <DropMenuItem>
    <template #text>
        Once upon a time in the era of
      <select class="select w-full max-w-xs">
        <option disabled selected>Pick your era</option>
        <option v-for="era in eras" :key="era.value" :value="era.value">{{ era.label }}</option>
      </select>
    </template>
  </DropMenuItem>

  <DropMenuItem>
    <template #text>
        There was a 
        <select class="select w-full max-w-xs">
        <option disabled selected>Pick your era</option>
        <option v-for="character in characterRoles" :key="character.value" :value="character.value">{{ character.label }}</option>
      </select>
    </template>
  </DropMenuItem>

  <DropMenuItem>
    <template #text>who lived in ---</template>
  </DropMenuItem>

  <button>Reveal the book</button>
</template>
