<script setup lang="ts">
import { ref } from 'vue'

const stats = ref([
  { label: 'Current Streak', value: '5 days' },
  { label: 'Workouts This Week', value: '4' },
  { label: 'Monthly Goal Progress', value: '65%' },
])
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
    <h3 class="text-lg dark:text-white font-semibold mb-3">Progress Stats</h3>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="stat in stats" :key="stat.label" class="text-center">
        <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">{{ stat.value }}</div>
        <div class="text-sm text-gray-500">{{ stat.label }}</div>
      </div>
    </div>
  </div>
</template>