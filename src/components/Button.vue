<script setup lang='ts'>
import { withDefaults } from 'vue'

import cn from '../utils/cn'

withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'outline'
}>(), {
  variant: 'primary',
})
</script>

<template>
  <button
    type="button"
    :class="cn(`h-10 px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background
                transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`,
               variant === 'primary' && 'bg-black text-white hover:bg-black/90',
               variant === 'secondary' && 'bg-gray-300 text-black hover:bg-gray-300/80',
               variant === 'outline' && 'border border-slate-300 bg-background hover:bg-gray-100 hover:text-neutral-900')"
  >
    <slot />
  </button>
</template>
