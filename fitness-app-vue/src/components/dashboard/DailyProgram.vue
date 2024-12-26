<script setup lang="ts">
import { ref } from 'vue';

// Define the Exercise type
type Exercise = {
  name: string;
  sets: number;
  reps?: number;
  duration?: string;
  checked?: boolean;
};

const program = {
  title: "Today's Workout Goals",
  exercises: [
    { name: 'Push-ups', sets: 3, reps: 12 },
    { name: 'Squats', sets: 4, reps: 15 },
    { name: 'Plank', sets: 3, duration: '45 sec' },
  ] as Exercise[],
};

// A reactive array to track selected goals
const selectedGoals = ref<Exercise[]>([]);

// Toggle the selection of an exercise
const toggleGoal = (exercise: Exercise) => {
  if (selectedGoals.value.includes(exercise)) {
    selectedGoals.value = selectedGoals.value.filter((item) => item !== exercise);
  } else {
    selectedGoals.value.push(exercise);
  }
};
</script>


<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
    <h2 class="text-lg dark:text-white font-semibold mb-4">{{ program.title }}</h2>
    <div class="mx-auto w-full  max-w-md">
      <div class="space-y-2">
        <div
          v-for="exercise in program.exercises"
          :key="exercise.name"
          @click="toggleGoal(exercise)"
          :class="[
            selectedGoals.includes(exercise)
              ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300 bg-sky-900/75 dark:bg-sky-900/75 text-white'
              : 'bg-gray-300 dark:bg-gray-600 text-gray-900',
          ]"
          class="relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none"
        >
          <div class="flex w-full items-center justify-between">
            <div class="flex items-center">
              <div class="text-sm">
                <p
                  :class="selectedGoals.includes(exercise) ? 'text-white' : 'text-gray-900'"
                  class="font-medium"
                >
                  {{ exercise.name }}
                </p>
                <span
                  :class="selectedGoals.includes(exercise) ? 'text-sky-100' : 'text-gray-500'"
                  class="inline"
                >
                  <span v-if="exercise.duration">{{ exercise.duration }}</span>
                  <span v-else>{{ exercise.reps }} reps &middot; {{ exercise.sets }} sets</span>
                </span>
              </div>
            </div>
            <div v-show="selectedGoals.includes(exercise)" class="shrink-0 text-white">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="#fff" fill-opacity="0.2" />
                <path
                  d="M7 13l3 3 7-7"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
