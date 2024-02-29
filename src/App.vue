<script setup lang='ts'>
import { ref } from 'vue'

import type { User } from './api/types'
import Pagination from '@/components/Pagination.vue'
import Table from '@/components/Table.vue'
import UserCU from '@/components/UserCU.vue'
import Button from '@/components/Button.vue'
import { getAllUser } from '@/api/user'

const isOpen = ref(false)
const tableData = ref<Array<User>>([])

function openDialog() {
  isOpen.value = true
}

function fetchData() {
  getAllUser().then((res) => {
    tableData.value = res
  })
}

fetchData()
</script>

<template>
  <div class="min-h-screen flex flex-col p-4 container mx-auto">
    <div class="my-4">
      <Button @click="openDialog">
        Add User
      </Button>
    </div>
    <Table :data="tableData" />
    <Pagination class="my-4" />
    <UserCU :is-open="isOpen" @close="isOpen = false" />
  </div>
</template>
