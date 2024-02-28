<script setup lang='ts'>
import { ref } from 'vue'

import Button from './components/Button.vue'
import Pagination from './components/Pagination.vue'
import Table from './components/Table.vue'
import UserCU from './components/UserCU.vue'

const isOpen = ref(false)

function openDialog() {
  isOpen.value = true
}
</script>

<template>
  <div class="min-h-screen flex flex-col p-4 container mx-auto">
    <div class="my-4">
      <Button @click="openDialog">
        Add User
      </Button>
    </div>
    <Table />
    <Pagination class="my-4" />
    <UserCU :is-open="isOpen" @close="isOpen = false" />
  </div>
</template>
