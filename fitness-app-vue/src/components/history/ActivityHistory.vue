<script setup lang="ts">
import { ref } from 'vue'

const activities = ref([
  {
    id: 1,
    type: 'Workout',
    name: 'Full Body Strength',
    duration: '45 min',
    date: '2024-03-10',
    stats: { calories: 320, exercises: 8 }
  },
  {
    id: 2,
    type: 'Cardio',
    name: 'Morning Run',
    duration: '30 min',
    date: '2024-03-09',
    stats: { calories: 250, distance: '4km' }
  }
])
</script>

<template>
  <div class="bg-white rounded-lg shadow p-4">
    <h3 class="text-lg font-semibold mb-4">Activity History</h3>
    <div class="space-y-4">
      <div v-for="activity in activities" 
           :key="activity.id"
           class="p-3 bg-gray-50 rounded-lg">
        <div class="flex justify-between items-start">
          <div>
            <h4 class="font-medium">{{ activity.name }}</h4>
            <p class="text-sm text-gray-600">{{ activity.type }} • {{ activity.duration }}</p>
          </div>
          <span class="text-sm text-gray-500">
            {{ new Date(activity.date).toLocaleDateString() }}
          </span>
        </div>
        <div class="mt-2 text-sm text-gray-600">
          <template v-if="activity.stats.calories">
            {{ activity.stats.calories }} calories
          </template>
          <template v-if="activity.stats.distance">
            • {{ activity.stats.distance }}
          </template>
        </div>
      </div>
    </div>
  </div>
</template>