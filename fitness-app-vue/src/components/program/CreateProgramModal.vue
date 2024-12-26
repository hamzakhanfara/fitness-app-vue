<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

const isOpen = ref(false)
const formData = ref({
  name: '',
  description: '',
  duration: '',
  difficulty: 'beginner',
  type: 'strength',
})

const openModal = () => {
  isOpen.value = true
}

const closeModal = () => {
  isOpen.value = false
}

const submitForm = () => {
  // Handle form submission
  console.log(formData.value)
  closeModal()
}

defineExpose({ openModal })
</script>

<template>
  <Dialog :open="isOpen" @close="closeModal" class="relative z-50">
    <div class="fixed inset-0 bg-black/30" />
    <div class="fixed inset-0 flex items-center justify-center p-4">
      <DialogPanel class="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg p-6">
        <DialogTitle class="text-lg font-medium mb-4 dark:text-white">Create New Program</DialogTitle>
        
        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Program Name</label>
            <input v-model="formData.name" type="text" class="mt-1 w-full dark:text-gray-800 rounded-md border p-2" required>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
            <textarea v-model="formData.description" class="mt-1 w-full rounded-md border p-2" rows="3" required></textarea>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Duration (weeks)</label>
            <input v-model="formData.duration" type="number" class="mt-1 w-full rounded-md border p-2" required>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Difficulty</label>
            <select v-model="formData.difficulty" class="mt-1 w-full rounded-md border p-2">
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Type</label>
            <select v-model="formData.type" class="mt-1 w-full rounded-md border p-2">
              <option value="strength">Strength Training</option>
              <option value="cardio">Cardio</option>
              <option value="flexibility">Flexibility</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>

          <div class="flex justify-end gap-3 mt-6">
            <button type="button" @click="closeModal" class="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900  rounded-md">
              Cancel
            </button>
            <button type="submit" class="px-4 py-2 bg-blue-600 dark:bg-blue-400 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-300">
              Create Program
            </button>
          </div>
        </form>
      </DialogPanel>
    </div>
  </Dialog>
</template>