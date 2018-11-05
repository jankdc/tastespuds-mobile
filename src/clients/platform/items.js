import { get } from './base'

export async function getItems (query) {
  return get('/items', {
    query
  })
}
