<script setup lang='ts'>
import Button from './components/Button.vue'
import Pagination from './components/Pagination.vue'
import Table from './components/Table.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col p-4 container mx-auto">
    <div class="my-4">
      <Button>
        Add User
      </Button>
    </div>
    <Table />
    <Pagination class="my-4" />
  </div>
</template>

<style scoped></style>
