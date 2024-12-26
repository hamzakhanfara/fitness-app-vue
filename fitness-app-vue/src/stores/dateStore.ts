import { defineStore } from 'pinia';

export const useDateStore = defineStore('date', {
  state: () => ({
    currentDate: new Date(), // Current date
    selectedDate: new Date(), // Default to current date
    isSessionStarted: false,
  }),
  actions: {
    updateSelectedDate(newDate: Date) {
      this.selectedDate = newDate;
    },
    updateCurrentDate(newDate: Date) {
      this.currentDate = newDate;
    },
    updateSessionStatus() {
      this.isSessionStarted = !this.isSessionStarted
    },
  },
});
