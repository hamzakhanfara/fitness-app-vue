<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useDateStore } from '../../stores/datestore';
const dateStore = useDateStore();
const props = defineProps<{
  duration: number
}>()

const timeLeft = ref(props.duration * 60)
const isPaused = ref(false)
const isFinished = ref(false)
let interval: number | null = null

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

const togglePause = () => {
  isPaused.value = !isPaused.value
}
const toggleFinish = () => {
  if(isFinished.value = false){
    isFinished.value = !isFinished.value
    timeLeft.value= 0
  }else {
    dateStore.isSessionStarted
  }
  
}
onMounted(() => {
  interval = window.setInterval(() => {
    if(isFinished.value){
      timeLeft.value= 0
    }
    else if (!isPaused.value && timeLeft.value > 0) {
      timeLeft.value--
    }
  }, 1000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
  isFinished.value = false
})
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
    <h2 class="text-xl font-semibold mb-4 dark:text-white">Workout Timer</h2>
    <div class="text-center">
      <div class="text-6xl font-bold mb-6 dark:text-white">{{ formatTime(timeLeft) }}</div>
      <div class="flex flex-col gap-3">
        <button
          @click="togglePause"
          class="px-6 py-2 rounded-lg dark:text-white"
          :class="isPaused ? 'bg-green-600' : 'bg-yellow-600'"
        >
          {{ isPaused ? 'Resume' : 'Pause' }}
        </button>
        <button
          @click="toggleFinish"
          class="px-6 py-2 rounded-lg dark:text-white"
          :class="isFinished ? 'bg-green-600' : 'bg-red-600'"
        >
          {{ isFinished ? 'Back to Session Setup' : 'Finish' }}
        </button>
      </div>
      
    </div>
  </div>
</template>