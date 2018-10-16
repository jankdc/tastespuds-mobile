import { PLATFORM_DOMAIN } from 'react-native-dotenv'
import { toQueryString } from '../utils/query'

export async function login (code) {
  const response = await window.fetch(`${PLATFORM_DOMAIN}/oauth/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      code
    })
  })

  if (!response.ok) {
    throw new Error('Failed to login the user')
  }

  return response.json()
}

export async function updateUser (id, body) {
  const response = await window.fetch(`${PLATFORM_DOMAIN}/users/id`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  if (!response.ok) {
    throw new Error('Failed to update the user')
  }

  return response.json()
}

export async function searchPlaces (location) {
  const queryStr = toQueryString({
    location
  })

  const response = await window.fetch(`${PLATFORM_DOMAIN}/search/places` + queryStr, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })

  if (!response.ok) {
    throw new Error('Failed to search any place')
  }

  const result = await response.json()

  return result.places
}

export async function getItems (gplaceId) {
  const queryStr = toQueryString({
    gplaceId
  })

  const response = await window.fetch(`${PLATFORM_DOMAIN}/items` + queryStr, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })

  if (!response.ok) {
    throw new Error('Failed to get any items')
  }

  const result = await response.json()

  return result.items
}
