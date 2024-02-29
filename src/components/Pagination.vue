<script setup lang='ts'>
import { ref, watch } from 'vue'

const props = defineProps<{
  page: number
  totalPages: number
}>()
const emit = defineEmits(['update'])

const currentPage = ref(props.page)

function onPrev() {
  if (currentPage.value > 1)
    currentPage.value -= 1
  else
    currentPage.value = 1
}

function onNext() {
  if (currentPage.value < props.totalPages)
    currentPage.value += 1
  else
    currentPage.value = props.totalPages
}

function onClick(page: number) {
  currentPage.value = page
}

watch(currentPage, () => {
  emit('update', currentPage.value)
})
</script>

<template>
  <div class="flex items-center w-full h-16">
    <nav>
      <ul class="flex items-center text-sm leading-tight bg-white border divide-x rounded h-9 text-neutral-500 divide-neutral-200 border-neutral-200">
        <li class="h-full">
          <button
            class="relative inline-flex items-center h-full px-3 ml-0 rounded-l group hover:text-neutral-900"
            @click="onPrev"
          >
            <span>&lt;</span>
          </button>
        </li>
        <li v-for="i in totalPages" :key="i" class="hidden h-full md:block">
          <button
            class="relative inline-flex items-center h-full px-3 hover:text-neutral-900 hover:bg-neutral-100"
            :class="i === page && 'text-neutral-900 bg-gray-100'"
            @click="onClick(i)"
          >
            <span>{{ i }}</span>
          </button>
        </li>
        <li class="h-full">
          <button
            class="relative inline-flex items-center h-full px-3 rounded-r group hover:text-neutral-900"
            @click="onNext"
          >
            <span>&gt;</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>
