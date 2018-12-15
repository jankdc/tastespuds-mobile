import { get, post } from './base'

export async function getPlaces ({ location, keyword }) {
  return get('/search/places', {
    query: {
      location,
      keyword
    }
  })
}

export async function addPlace (place) {
  return post('/places', {
    body: {
      name: place.name,
      types: place.types,
      street: place.street,
      location: place.location,
      city: place.city,
      postal_code: place.postal_code,
      country: place.country,
      address_id: place.address_id
    }
  })
}
