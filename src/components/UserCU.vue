<script setup lang='ts'>
import { ref, shallowRef, watch } from 'vue'
import Dialog from './Dialog.vue'
import Button from './Button.vue'
import Input from './Input.vue'
import Select from './Select.vue'
import { createUser, getUserById, updateUserById } from '@/api/user'

const props = defineProps<{
  isOpen: boolean
  id?: number
}>()

const emit = defineEmits(['close', 'update'])

const username = ref('')
const gender = ref('')

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

function clear() {
  username.value = ''
  gender.value = ''
}

function onSubmit() {
  if (!username.value || !gender.value)
    return

  if (!props.id) {
    createUser(username.value, gender.value).then((res) => {
      if (res) {
        // alert(res)
        emit('update')
      }
    }).catch((err) => {
      console.error(err)
    }).finally(() => {
      emit('close')
      clear()
    })
  }
  else {
    updateUserById(props.id, {
      username: username.value,
      gender: gender.value,
    }).then((res) => {
      if (res) {
        // alert(res)
        emit('update')
      }
    }).catch((err) => {
      console.error(err)
    }).finally(() => {
      emit('close')
      clear()
    })
  }
}

watch(() => props.id, () => {
  if (props.id) {
    getUserById(props.id).then((res) => {
      username.value = res.username
      gender.value = res.gender
    })
  }
  else {
    username.value = ''
    gender.value = ''
  }
})
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
      <Input v-model="username" name="Name" />
      <Select v-model="gender" :options="options" selected="" />
    </div>
    <template #footer>
      <Button variant="outline" @click="$emit('close')">
        Cancel
      </Button>
      <Button @click="onSubmit">
        Confirm
      </Button>
    </template>
  </Dialog>
</template>
