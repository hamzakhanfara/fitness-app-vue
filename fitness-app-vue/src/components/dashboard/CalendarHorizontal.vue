<script setup lang="ts">
import { useDateStore } from '../../stores/datestore';
import { ref } from 'vue';
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/outline';


const dateStore = useDateStore();
const openFullCalendar = ref(false);

const toggleCalendar = () => {
  openFullCalendar.value = !openFullCalendar.value;
};

// Function to update the selected date in the store
const selectDate = (day: number) => {
  const newDate = new Date(dateStore.currentDate); // Clone the current date
  newDate.setDate(day); // Set the clicked day
  dateStore.updateSelectedDate(newDate); // Update the selected date in the store
};

// Generate an array of days for the current month
const daysInMonth = new Date(
  dateStore.currentDate.getFullYear(),
  dateStore.currentDate.getMonth() + 1,
  0
).getDate();

const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
const generateDays = () => {
  const daysInMonth = new Date(
    dateStore.selectedDate.getFullYear(),
    dateStore.selectedDate.getMonth() + 1,
    0
  ).getDate();

  return Array.from({ length: daysInMonth }, (_, i) => i + 1);
};

let Days = generateDays();
const changeMonth = (increment: number) => {
  const newDate = new Date(dateStore.selectedDate);
  newDate.setMonth(newDate.getMonth() + increment); // Increment or decrement month
  dateStore.updateSelectedDate(newDate); // Update the store
  Days = generateDays(); // Regenerate days for the new month
};
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
    <!-- Header Section -->
    <div class="flex w-full justify-center gap-4 items-center">
        <button @click="changeMonth(-1)" class="border border-gray-200 p-2 rounded-md ">
            <ArrowLeftIcon class="h-5 w-5 text-gray-900 dark:text-white" />
        </button>
        <button @click="toggleCalendar" class="border inline-flex items-center border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 gap-4 py-2 px-10 rounded-md">
            <h2 class="text-lg font-semibold dark:text-white">
            {{ dateStore.selectedDate.toLocaleDateString('default', { day:'2-digit', month: 'long', year: 'numeric' }) }}
            </h2>
        </button>
        <button @click="changeMonth(1)" class="border border-gray-200 p-2 rounded-md">
            <ArrowRightIcon class="h-5 w-5 text-gray-900 dark:text-white" />
        </button>
    </div>
    <div v-show="openFullCalendar" class="border mt-4 dark:border-gray-200 border-gray-200 rounded-md">
        <div class="grid grid-cols-7 gap-2 text-center  text-gray-500 text-sm py-2">
            <div v-for="day in ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']" :key="day">
                {{ day }}
            </div>
        </div>

        <!-- Calendar Days -->
        <div class="grid grid-cols-7 gap-2">
            <div
                v-for="day in days"
                :key="day"
                @click="selectDate(day)"
                class="text-center py-2 rounded-lg cursor-pointer dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
                :class="{
                'bg-blue-500 text-white': day === dateStore.selectedDate.getDate(),
                'text-gray-800': day !== dateStore.selectedDate.getDate(),
                }"
            >
                {{ day }}
            </div>
        </div>
    </div>
    
  </div>
</template>
