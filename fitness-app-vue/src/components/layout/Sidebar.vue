<script setup lang="ts">
import { HomeIcon, Squares2X2Icon, BoltIcon, ArrowPathIcon, ClockIcon } from '@heroicons/vue/24/solid';

const appName = "FitTrack";
const menuItems = [
  { icon: HomeIcon, label: "Home", route: "/" },
  { icon: Squares2X2Icon, label: "Dashboard", route: "/dashboard" },
  { icon: BoltIcon, label: "Session", route: "/session" },
  { icon: ArrowPathIcon, label: "Progress", route: "/progress" },
  { icon: ClockIcon, label: "History", route: "/history" },
];
</script>

<template>
  <aside class="bg-white dark:bg-gray-800 w-64 h-screen shadow-lg flex flex-col">
    <div class="p-4 border-b dark:border-gray-700">
      <router-link to="/">
        <h1 class="text-xl font-bold dark:text-white">{{ appName }}</h1>
      </router-link>
    </div>
    <nav class="flex-1 p-4">
      <ul class="space-y-2">
        <li v-for="item in menuItems" :key="item.label">
          <router-link
            :to="item.route"
            class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
            :class="{ 'bg-gray-100 dark:bg-gray-700': $route.path === item.route }"
          >
            <component :is="item.icon" class="h-6 w-6 text-gray-800 dark:text-white" />
            <span>{{ item.label }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <footer>to do</footer>
  </aside>
</template>
