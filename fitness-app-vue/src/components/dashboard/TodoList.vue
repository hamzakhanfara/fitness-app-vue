<script setup lang="ts">
import { ref } from 'vue'

interface Todo {
  id: number
  text: string
  completed: boolean
}

const newTodo = ref('')
const todos = ref<Todo[]>([
  { id: 1, text: 'Complete morning workout', completed: false },
  { id: 2, text: 'Track water intake', completed: true },
  { id: 3, text: 'Prepare healthy meals', completed: false },
])

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push({
      id: Date.now(),
      text: newTodo.value,
      completed: false
    })
    newTodo.value = ''
  }
}

const toggleTodo = (id: number) => {
  const todo = todos.value.find(t => t.id === id)
  if (todo) {
    todo.completed = !todo.completed
  }
}

const removeTodo = (id: number) => {
  todos.value = todos.value.filter(t => t.id !== id)
}
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
    <h2 class="text-lg font-semibold mb-4 dark:text-white">Today's Tasks</h2>
    
    <form @submit.prevent="addTodo" class="flex gap-2 mb-4">
      <input
        v-model="newTodo"
        type="text"
        placeholder="Add new task..."
        class="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600"
      >
      <button
        type="submit"
        class="px-4 py-2 bg-blue-600 dark:bg-blue-400 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-300"
      >
        Add
      </button>
    </form>

    <ul class="space-y-2">
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="flex items-center justify-between p-3 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-lg"
      >
        <div class="flex items-center gap-3">
          <input
            type="checkbox"
            :checked="todo.completed"
            @change="toggleTodo(todo.id)"
            class="w-4 h-4 rounded"
          >
          <span :class="{ 'line-through text-gray-500': todo.completed }">
            {{ todo.text }}
          </span>
        </div>
        <button
          @click="removeTodo(todo.id)"
          class="text-red-500 hover:text-red-700"
        >
          ×
        </button>
      </li>
    </ul>
  </div>
</template>