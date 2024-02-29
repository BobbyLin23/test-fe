<script lang="ts" setup>
import { ref } from 'vue'

import ArrowDown from './ArrowDown.vue'

defineProps<{
  options: Array<{ label: string, value: string }>
}>()
const emit = defineEmits(['update:selected'])

const selected = defineModel()
const isOpen = ref(false)

function onClick(val: string) {
  isOpen.value = !isOpen.value
  selected.value = val
  emit('update:selected', val)
}
</script>

<template>
  <div class="w-full max-w-xs mx-auto flex items-center gap-x-2">
    <label for="select" class="text-sm font-semibold w-16">
      Gender
    </label>
    <div class="relative w-full">
      <button
        type="button"
        class="px-3 py-2 rounded-md w-full border border-gray-300"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        @click="isOpen = !isOpen"
      >
        <div class="w-5 h-5 flex-shrink-0 text-sm">
          {{ selected }}
        </div>
        <ArrowDown />
      </button>
      <ul
        v-if="isOpen"
        class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1
        ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        tabindex="-1"
        role="listbox"
        aria-labelledby="listbox-label"
        aria-activedescendant="listbox-option-0"
      >
        <li
          v-for="option in options"
          id="listbox-option-0"
          :key="option.value"
          class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-slate-100"
          role="option"
          @click="onClick(option.value)"
        >
          <div>
            {{ option.label }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
