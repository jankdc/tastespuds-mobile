import { get } from './base'

export async function getItems (placeId) {
  return get('/items', {
    query: {
      place_id: placeId
    }
  })
}
