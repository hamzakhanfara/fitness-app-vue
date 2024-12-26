<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  workoutType: string
}>()

interface Exercise {
  id: number
  name: string
  reps: string
  calories: number
  completed: boolean
}

const exercises = ref<Exercise[]>([
  { id: 1, name: 'Push-ups', reps: '3 x 12', calories: 50, completed: false },
  { id: 2, name: 'Squats', reps: '4 x 15', calories: 80, completed: false },
  { id: 3, name: 'Plank', reps: '3 x 45s', calories: 40, completed: false },
])

const toggleExercise = (id: number) => {
  const exercise = exercises.value.find(e => e.id === id)
  if (exercise) {
    exercise.completed = !exercise.completed
  }
}

const totalCalories = computed(() => 
  exercises.value.reduce((sum, ex) => sum + ex.calories, 0)
)
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-semibold dark:text-white">Exercises</h2>
      <span class="dark:text-gray-400 text-gray-600">Total: {{ totalCalories }} calories</span>
    </div>
    
    <div class="space-y-3">
      <div
        v-for="exercise in exercises"
        :key="exercise.id"
        class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
      >
        <div class="flex items-center gap-3">
          <input
            type="checkbox"
            :checked="exercise.completed"
            @change="toggleExercise(exercise.id)"
            class="w-5 h-5 rounded"
          >
          <div>
            <div class="font-medium dark:text-white" :class="{ 'line-through': exercise.completed }">
              {{ exercise.name }}
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              {{ exercise.reps }} • {{ exercise.calories }} calories
            </div>
          </div>
        </div>
        <button
          class="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
          title="Watch tutorial"
        >
          Watch Demo
        </button>
      </div>
    </div>
  </div>
</template>