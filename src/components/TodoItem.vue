<script setup lang="ts">
  import type { Todo } from './../types'

  import EditIcon from './../icons/EditIcon.vue';
  import DeleteIcon from './../icons/DeleteIcon.vue';

  interface Props {
    todo: Todo
  }

  const props = defineProps<Props>();
</script>

<template>
  <div class="flex border border-slate-200 rounded-lg pt-4 pb-4 pl-5 pr-5 mb-8 justify-between items-center hover:bg-slate-100">
    <p>{{ props.todo.name }}</p>
    <div class="flex">
      <button class="hover:bg-slate-50 p-2 rounded-lg hover:text-red-800 mr-3" @click.prevent="$emit('remove', props.todo.id)"><DeleteIcon/></button>
      <button class="hover:bg-slate-50 p-2 rounded-lg hover:text-sky-600"><EditIcon/></button>
    </div>
  </div>
</template>