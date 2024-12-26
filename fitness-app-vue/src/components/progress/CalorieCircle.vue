<script setup lang="ts">
import { ref, computed } from 'vue'

const dailyCalories = ref(1850)
const calorieGoal = ref(2200)
const percentage = computed(() => Math.round((dailyCalories.value / calorieGoal.value) * 100))
const strokeDasharray = computed(() => `${percentage.value} 100`)
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
    <h3 class="text-lg font-semibold mb-3 dark:text-white">Daily Calories</h3>
    <div class="flex justify-center">
      <div class="relative w-32 h-32">
        <svg class="w-full h-full" viewBox="0 0 36 36">
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#eee"
            stroke-width="3"
          />
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#3b82f6"
            stroke-width="3"
            :stroke-dasharray="strokeDasharray"
          />
          <text x="18" y="22.35" class="text-xs dark:text-white" text-anchor="middle">
            {{ percentage }}%
          </text>
        </svg>
      </div>
    </div>
    <div class="text-center mt-2">
      <div class="text-gray-500">{{ dailyCalories }} / {{ calorieGoal }} kcal</div>
    </div>
  </div>
</template>