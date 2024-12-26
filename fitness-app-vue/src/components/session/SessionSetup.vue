<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  duration: number
  type: string
  part: string
}>()

const emit = defineEmits(['update:duration', 'update:type','update:part', 'start'])

const workoutTypes = [
  { value: 'cardio', label: 'Cardio', icon: '🏃' },
  { value: 'strength', label: 'Strength', icon: '💪' },
  { value: 'flexibility', label: 'Flexibility', icon: '🧘' },
]

const bodyParts = [
  { value: 'full', label: 'Full Body' },
  { value: 'upper', label: 'Upper Body' },
  { value: 'lower', label: 'Lower Body' },
  { value: 'core', label: 'Core' },
]

const durations = [15, 30, 45, 60]
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
    <h2 class="text-xl font-semibold mb-6 dark:text-white">Plan Your Session</h2>
    
    <div class="space-y-6">
      <div>
        <h3 class="text-lg font-medium mb-3 dark:text-white">Workout Type</h3>
        <div class="grid grid-cols-3 gap-4">
          <button
            v-for="type in workoutTypes"
            :key="type.value"
            @click="emit('update:type', type.value)"
            class="p-4 rounded-lg border-2 text-center hover:border-blue-500"
            :class="{ 'border-blue-500': props.type === type.value }"
          >
            <div class="text-2xl mb-2">{{ type.icon }}</div>
            <div class="dark:text-white">{{ type.label }}</div>
          </button>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-medium mb-3 dark:text-white">Target Area</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <button
            v-for="part in bodyParts"
            :key="part.value"
            @click="emit('update:part', part.value)"
            class="px-4 py-2 rounded-lg border dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900"
            :class="{ 'border-blue-500': props.part === part.value }"
          >
            {{ part.label }}
          </button>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-medium mb-3 dark:text-white">Duration (minutes)</h3>
        <div class="flex gap-3">
          <button
            v-for="time in durations"
            :key="time"
            @click="emit('update:duration', time)"
            class="px-6 py-2 rounded-lg border-2 dark:text-white hover:border-blue-500"
            :class="{ 'border-blue-500': props.duration === time }"
          >
            {{ time }}
          </button>
        </div>
      </div>

      <button
        @click="emit('start')"
        class="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Start Session
      </button>
    </div>
  </div>
</template>