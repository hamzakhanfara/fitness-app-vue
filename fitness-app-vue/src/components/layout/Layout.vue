<script setup lang="ts">
import { ref } from 'vue'
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'

const isSidebarOpen = ref(true)
</script>

<template>
  <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
    <Sidebar v-show="isSidebarOpen" />
    <div class="flex-1 flex flex-col overflow-hidden">
      <Navbar @toggle-sidebar="isSidebarOpen = !isSidebarOpen" />
      <main class="flex-1 overflow-auto p-6">
        <slot></slot>
      </main>
    </div>
  </div>
</template>