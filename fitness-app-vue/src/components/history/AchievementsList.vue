<script setup lang="ts">
import { ref } from 'vue'

const achievements = ref([
  { 
    id: 1,
    title: 'First Milestone',
    description: 'Completed first week of training',
    date: '2024-03-01',
    icon: '🎯'
  },
  {
    id: 2,
    title: 'Consistency King',
    description: '7-day streak achieved',
    date: '2024-03-08',
    icon: '👑'
  },
])
</script>

<template>
  <div class="bg-white rounded-lg shadow p-4">
    <h3 class="text-lg font-semibold mb-4">Achievements</h3>
    <div class="space-y-4">
      <div v-for="achievement in achievements" 
           :key="achievement.id"
           class="flex items-start gap-4 p-3 bg-gray-50 rounded-lg">
        <div class="text-2xl">{{ achievement.icon }}</div>
        <div>
          <h4 class="font-medium">{{ achievement.title }}</h4>
          <p class="text-sm text-gray-600">{{ achievement.description }}</p>
          <span class="text-xs text-gray-500">{{ new Date(achievement.date).toLocaleDateString() }}</span>
        </div>
      </div>
    </div>
  </div>
</template>