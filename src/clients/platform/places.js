import { get } from './base'

export async function getPlaces (location) {
  return get('/search/places', {
    query: {
      location
    }
  })
}
