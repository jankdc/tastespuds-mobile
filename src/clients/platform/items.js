import { get } from './base'

export async function getItems (placeId) {
  return get('/items', {
    query: {
      placeId
    }
  })
}
