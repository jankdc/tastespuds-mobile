import { get } from './base'

export async function getPlaces ({ location, keyword }) {
  return get('/search/places', {
    query: {
      location,
      keyword
    }
  })
}
