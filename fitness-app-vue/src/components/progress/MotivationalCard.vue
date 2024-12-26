<script setup lang="ts">
import { ref } from 'vue'

const messages = [
  "Every step counts towards your goal!",
  "You're stronger than you think!",
  "Progress is progress, no matter how small.",
  "Keep pushing, keep growing!",
]

const currentMessage = ref(messages[Math.floor(Math.random() * messages.length)])
</script>

<template>
  <div class="bg-white dark:bg-gray-800 flex flex-col justify-center rounded-lg shadow p-4">
    <div class="text-xl font-medium text-center text-blue-600 dark:text-blue-400">
      {{ currentMessage }}
    </div>
  </div>
</template>