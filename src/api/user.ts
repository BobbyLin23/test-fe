import type { User } from './types'
import request from '@/utils/request'

export function createUser(username: string, gender: string): Promise<string> {
  return request({
    url: '/user',
    method: 'post',
    data: {
      username,
      gender,
    },
  })
}

export function getAllUser(page: number): Promise<{
  total_pages: number
  users: User[]
}> {
  return request({
    url: '/users',
    params: {
      page,
    },
    method: 'get',
  })
}

export function getUserById(id: number): Promise<User> {
  return request({
    url: `/user/${id}`,
    method: 'get',
  })
}

export function updateUserById(id: number, data: {
  username: string
  gender: string
}): Promise<User> {
  return request({
    url: `/user/${id}`,
    method: 'put',
    data,
  })
}
