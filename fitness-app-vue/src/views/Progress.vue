<script setup lang="ts">
import WalksCounter from '../components/progress/WalksCounter.vue'
import CalorieCircle from '../components/progress/CalorieCircle.vue'
import MotivationalCard from '../components/progress/MotivationalCard.vue'
import ProgressStats from '../components/progress/ProgressStats.vue'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <WalksCounter />
    <CalorieCircle />
    <MotivationalCard />
    <ProgressStats />
  </div>
</template>