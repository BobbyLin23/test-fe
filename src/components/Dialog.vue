<script setup lang='ts'>
import Close from './Close.vue'

defineProps<{
  show: boolean
}>()

defineEmits(['close'])
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="show" class="duration-300 transition-opacity fixed inset-0 z-50 flex items-center justify-center bg-opacity-30 bg-black">
        <div
          class="bg-white rounded-lg shadow-lg p-2 w-full max-w-md"
        >
          <div class="flex justify-between items-center font-semibold py-2 px-4 border-b">
            <slot name="header" />
            <div class="cursor-pointer hover:opacity-50" @click="$emit('close')">
              <Close class="w-6 h-6" />
            </div>
          </div>
          <div class="p-4">
            <slot />
          </div>
          <div class="flex justify-end px-4 py-2 items-center border-t gap-4">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}
</style>
