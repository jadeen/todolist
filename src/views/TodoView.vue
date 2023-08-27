<script setup lang="ts">
  import { useRoute, RouterLink, useLink } from 'vue-router'
  import { ref } from 'vue'
  import { v4 as uuid4 } from 'uuid'
  import type { Todo } from './../types'

  const route = useRoute()

  const name = ref('');

  const { navigate } = useLink({ to: "/" });

  const todos: Array<Todo> = JSON.parse(localStorage.getItem('todoList') || '[]');

  if (route.params.id !== 'new') {
    name.value = todos.find(({ id }) => id === route.params.id)?.name || '';
  }

  const saveForm = () => {
    
    const index = todos.findIndex(({ id }) => id === route.params.id);

    if (index == -1) {
      todos.push({ name: name.value, id: uuid4()})
    }

    if (index >= 0) {
      todos[index].name = name.value;
    }

    localStorage.setItem('todoList', JSON.stringify(todos));
  
    navigate()
  }

</script>
<template>
  <div class="border border-slate-200 rounded-lg pt-4 pb-4 pl-5 pr-5 max-w-4xl mx-auto mt-5">

    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
    <div class="mt-2">
      <input v-model="name" type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
    </div>

    <div class="flex justify-end mt-5">
      <router-link to="/">
        <button class="text-zinc-900 pl-6 pr-6 h-9 rounded-lg font-medium mr-5 hover:text-red-800 hover:bg-slate-50">Cancel</button>
      </router-link>
      <button class="bg-cyan-500 hover:bg-cyan-600 text-slate-50 pl-6 pr-6 h-9 rounded-lg font-medium" @click="saveForm()">Save</button>
    </div>
  </div>
</template>

<style>
</style>
