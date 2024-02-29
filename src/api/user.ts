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

export function getAllUser(): Promise<User[]> {
  return request({
    url: '/users',
    method: 'get',
  })
}
