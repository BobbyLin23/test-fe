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
const currentId = ref()
const page = ref(1)
const totalPages = ref(1)

function openDialog() {
  isOpen.value = true
  currentId.value = undefined
}

function fetchData() {
  getAllUser(page.value).then((res) => {
    tableData.value = res.users
    totalPages.value = res.total_pages
  })
}

function onEdit(id: string) {
  isOpen.value = true
  currentId.value = id
}

function onPagination(val: number) {
  page.value = val
  fetchData()
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
    <Table :data="tableData" @edit="onEdit" />
    <Pagination class="my-4" :page="page" :total-pages="totalPages" @update="onPagination" />
    <UserCU :id="currentId" :is-open="isOpen" @close="isOpen = false" @update="fetchData" />
  </div>
</template>
