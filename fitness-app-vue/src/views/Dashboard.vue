<script setup lang="ts">
import StatsCard from '../components/dashboard/StatsCard.vue';
import CalendarHorizontal from '../components/dashboard/CalendarHorizontal.vue'
import DailyProgram from '../components/dashboard/DailyProgram.vue'
import TodoList from '../components/dashboard/TodoList.vue'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
    <CalendarHorizontal class="md:col-span-5" />
    <StatsCard class="md:col-span-5" />
    <TodoList class="md:col-span-3" />
    <DailyProgram class="md:col-span-2" />
  </div>
</template>