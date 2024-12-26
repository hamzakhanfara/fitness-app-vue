<script setup lang="ts">
import { ref } from 'vue'
import { ArrowDownIcon } from '@heroicons/vue/24/outline'; 
const currentDate = ref(new Date())
const daysInMonth = new Date(
  currentDate.value.getFullYear(),
  currentDate.value.getMonth() + 1,
  0
).getDate()

const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
</script>

<template>
  <div class="bg-white rounded-lg shadow p-4">
    <div class="flex justify-between items-center mb-4">
      <button class="inline-flex gap-4 items-center">
        <h2 class="text-lg font-semibold">
          {{ currentDate.toLocaleString('default', { day:'2-digit', month: 'long', year: 'numeric' }) }}
        </h2>
        <ArrowDownIcon class="size-5" />
      </button>
      <div class="flex gap-2">
        <button class="p-2 hover:bg-gray-100 rounded-lg">←</button>
        <button class="p-2 hover:bg-gray-100 rounded-lg">→</button>
      </div>
    </div>
    <div class="grid grid-cols-7 gap-2">
      <div v-for="day in ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']" 
           class="text-center text-gray-500 text-sm py-2">
        {{ day }}
      </div>
      <div v-for="day in days" 
           class="text-center py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
        {{ day }}
      </div>
    </div>
  </div>
</template>