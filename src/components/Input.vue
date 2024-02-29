<script setup lang='ts'>
defineProps<{
  name: string
  type?: string
}>()

const value = defineModel()
</script>

<template>
  <div class="w-full max-w-xs mx-auto flex items-center gap-x-2">
    <label :for="name" class="text-sm font-semibold w-16">
      {{ name }}
    </label>
    <input
      v-model="value"
      type="text"
      :placeholder="name"
      class="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300
      placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-neutral-400
      disabled:cursor-not-allowed disabled:opacity-50"
    >
  </div>
</template>

<style scoped></style>
