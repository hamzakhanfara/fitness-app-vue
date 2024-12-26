<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Bars3Icon } from '@heroicons/vue/24/outline';
import { MoonIcon, SunIcon, Cog8ToothIcon } from '@heroicons/vue/24/solid';
const isDarkMode = ref(false)
const searchQuery = ref('')
const route = useRoute()
const userName = "Hamza kh"

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark')
}
</script>

<template>
  <nav class="bg-white dark:bg-gray-800 shadow-md gap-4 px-4 py-3 flex items-center justify-between">
    <div class="flex items-center gap-4">
      <button @click="$emit('toggle-sidebar')" class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
        <Bars3Icon class="size-6 text-gray-800 dark:text-white" />
      </button>
      <span class=" text-gray-600 dark:text-gray-300">{{ route.name }}</span>
    </div>
    <div class="flex items-center gap-4">
      <input
        v-model="searchQuery"
        type="search"
        placeholder="Search..."
        class="w-48 px-3 py-1 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
      />
      <button
        @click="toggleDarkMode"
        class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <SunIcon class="size-6 text-white" v-if="isDarkMode" />
        <MoonIcon class="size-6 text-gray-800" v-else />
      </button>
      <span class="text-gray-600 dark:text-gray-300">{{ userName }}</span>
      <button class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
        <Cog8ToothIcon class="size-6 text-gray-800 dark:text-white" />
      </button>
    </div>
  </nav>
</template>