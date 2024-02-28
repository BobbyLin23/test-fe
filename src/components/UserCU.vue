<script setup lang='ts'>
import { shallowRef } from 'vue'
import Dialog from './Dialog.vue'
import Button from './Button.vue'
import Input from './Input.vue'
import Select from './Select.vue'

defineProps<{
  isOpen: boolean
  id?: string
}>()

defineEmits(['close', 'update'])

const options = shallowRef([
  {
    label: 'Male',
    value: 'Male',
  },
  {
    label: 'Female',
    value: 'Female',
  },
])
</script>

<template>
  <Dialog :show="isOpen" @close="$emit('close')">
    <template #header>
      <div v-if="id">
        Edit User
      </div>
      <div v-else>
        Add User
      </div>
    </template>
    <div class="flex flex-col w-full gap-y-4">
      <Input name="Name" />
      <Select :options="options" selected="" />
    </div>
    <template #footer>
      <Button variant="outline" @click="$emit('close')">
        Cancel
      </Button>
      <Button @click="$emit('update')">
        Confirm
      </Button>
    </template>
  </Dialog>
</template>

<style scoped></style>
