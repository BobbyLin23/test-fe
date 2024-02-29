<script setup lang='ts'>
import Button from './Button.vue'

defineProps<{
  data: Array<{ id: string, username: string, gender: string }>
}>()
</script>

<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto">
      <div class="inline-block min-w-full">
        <div class="overflow-hidden">
          <table class="min-w-full divide-y divide-neutral-200 border border-collapse">
            <thead>
              <tr class="text-neutral-500">
                <th class="px-5 py-3 text-xs font-medium text-center border">
                  ID
                </th>
                <th class="px-5 py-3 text-xs font-medium text-center border">
                  Name
                </th>
                <th class="px-5 py-3 text-xs font-medium text-center border">
                  Gender
                </th>
                <th class="px-5 py-3 text-xs font-medium text-center border">
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-neutral-200">
              <tr v-for="item in data" :key="item.id" class="text-neutral-800">
                <td class="px-5 py-4 text-sm font-medium text-center whitespace-nowrap border">
                  {{ item.id }}
                </td>
                <td class="px-5 py-4 text-sm whitespace-nowrap text-center border">
                  {{ item.username }}
                </td>
                <td class="px-5 py-4 text-sm whitespace-nowrap text-center border">
                  {{ item.gender }}
                </td>
                <td class="px-5 py-4 text-sm font-medium text-center whitespace-nowrap border">
                  <Button variant="secondary">
                    Edit
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
