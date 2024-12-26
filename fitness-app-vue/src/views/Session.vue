<script setup lang="ts">
import SessionSetup from '../components/session/SessionSetup.vue'
import WorkoutTimer from '../components/session/WorkoutTimer.vue'
import ExerciseList from '../components/session/ExerciseList.vue'
import { ref } from 'vue'
import { useDateStore } from '../stores/datestore';
const dateStore = useDateStore();
const selectedDuration = ref(30)
const selectedType = ref('')
const selectedPart = ref('')

const startSession = () => {
  dateStore.isSessionStarted = true
}
</script>

<template>
  <div v-if="!dateStore.isSessionStarted" class="space-y-6">
    <SessionSetup 
      v-model:duration="selectedDuration"
      v-model:type="selectedType"
      v-model:part="selectedPart"
      @start="startSession"
    />
  </div>
  <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <WorkoutTimer :duration="selectedDuration" />
    <ExerciseList :workoutType="selectedType" />
  </div>
</template>