<script setup lang="ts">
  import { inject, ref } from 'vue'
  import { RouterLink  } from 'vue-router'

  import TodoItem from './../components/TodoItem.vue'

  import type { Todo } from './../types'
import { TODO_LIST } from '@/provider';

  let items = ref<Array<Todo>>(inject(TODO_LIST) || [])

  const removeTodo =  (idToRemove: string) => {
    const tmp = items.value.filter(({ id }: Todo) => {
      return id !== idToRemove
    })

    items.value = tmp;
  }
</script>

<template>
  <main>

    <div class="mt-10 mb-2">

      <router-link v-for="(item) in items" v-bind:key="item.id" v-bind:to="'/todo/' + item.id">
        <TodoItem :todo="item" @remove="removeTodo"/>
      </router-link>

      <div v-if="items.length === 0">
        <p class="text-red-800 text-center my-5 font-semibold">You don't have any item to your list</p>
      </div>
    </div>

    <div class="flex border border-slate-200 rounded-lg pt-4 pb-4 pl-5 pr-5 justify-between items-center">
      <p>Create a new entries in your list</p>
      <router-link to="/todo/new">
        <button class="bg-cyan-500 hover:bg-cyan-600 text-slate-50 pl-6 pr-6 h-9 rounded-lg font-medium">Add</button>
      </router-link>  
    </div>
  </main>
</template>