<script setup>
import DropMenuItem from './DropMenuItem.vue'
</script>

<template>
  <DropMenuItem>
    <template #text>Once upon a time in the era of 
      <select class="select w-full max-w-xs">
  <option disabled selected>Pick your favorite Simpson</option>
  <option>Homer</option>
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>
     </template>
  </DropMenuItem>

  <DropMenuItem>
    <template #text>There was a ---</template>
  </DropMenuItem>

  <DropMenuItem>
    <template #text>who lived in ---</template>
  </DropMenuItem>

  <button>Reveal the book</button>
</template>
