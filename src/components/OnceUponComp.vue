<script setup>
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
  <WelcomeItem>
    <template #text>Once upon a time in the era of --- </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #text>There was a ---</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #text>who lived in ---</template>
  </WelcomeItem>

  <button>Reveal the book</button>
</template>
