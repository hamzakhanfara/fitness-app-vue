<script setup lang="ts">
import { ref, computed } from 'vue'

const weeklySteps = ref(45678)
const weeklyGoal = ref(70000)
const progress = computed(() => Math.round((weeklySteps.value / weeklyGoal.value) * 100))
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
    <h3 class="text-lg font-semibold mb-3 dark:text-white">Weekly Steps</h3>
    <div class="flex items-center justify-between mb-2">
      <span class="text-2xl font-bold dark:text-white">{{ weeklySteps.toLocaleString() }}</span>
      <span class="text-gray-500">Goal: {{ weeklyGoal.toLocaleString() }}</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2.5">
      <div class="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full" :style="{ width: `${progress}%` }"></div>
    </div>
  </div>
</template>