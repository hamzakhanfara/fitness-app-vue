<script setup lang="ts">
import { ref } from 'vue'

const stats = ref([
  {
    id: 1,
    label: 'Calories Burned',
    value: '856',
    unit: 'kcal',
    change: '+12%',
    color: 'bg-red-500',
    icon: '🔥'
  },
  {
    id: 2,
    label: 'Daily Steps',
    value: '8,432',
    unit: 'steps',
    change: '+5%',
    color: 'bg-yellow-400',
    icon: '👣'
  },
  {
    id: 3,
    label: 'Active Minutes',
    value: '45',
    unit: 'min',
    change: '+8%',
    color: 'bg-green-500',
    icon: '⏱️'
  },
  {
    id: 4,
    label: 'Water Intake',
    value: '1.8',
    unit: 'L',
    change: '-2%',
    color: 'bg-cyan-500',
    icon: '💧'
  }
])
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2 gap-4">
    <div 
      v-for="stat in stats" 
      :key="stat.id"
      class="bg-white rounded-lg shadow-md p-4 "
      :class="stat.color"
    >
      <div class="flex justify-between items-start">
        <div>
          <p class="text-gray-300 text-sm">{{ stat.label }}</p>
          <div class="mt-1 flex items-baseline">
            <p class="text-2xl text-white font-semibold">{{ stat.value }}</p>
            <p class="ml-1 text-sm text-gray-200">{{ stat.unit }}</p>
          </div>
        </div>
        <span class="text-2xl">{{ stat.icon }}</span>
      </div>
      <div class="mt-4">
        <span 
          class="text-sm font-medium"
          :class="stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'"
        >
          {{ stat.change }} from last week
        </span>
      </div>
    </div>
  </div>
</template>