<script setup lang="ts">
import { ref } from 'vue'
import CreateProgramModal from '../components/program/CreateProgramModal.vue'

const modalRef = ref()

const openCreateProgram = () => {
  modalRef.value.openModal()
}
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-8">
      <h1 class="text-3xl dark:text-white font-bold mb-4">Welcome to Your Fitness Journey</h1>
      <p class="text-gray-600 mb-6">Let's create our first program and start achieving your fitness goals!</p>
      <button 
        @click="openCreateProgram"
        class="px-6 py-3 bg-blue-600 dark:bg-blue-400 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-300 transition-colors"
      >
        Create a Program
      </button>
    </div>
    <CreateProgramModal ref="modalRef" />
  </div>
</template>