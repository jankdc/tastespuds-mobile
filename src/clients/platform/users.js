import { get } from './base'

export async function getUser (username) {
  return get(`/users/${username}`)
}

export async function getMe () {
  return get(`/me`)
}
