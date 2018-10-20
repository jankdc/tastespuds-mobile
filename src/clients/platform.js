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

export async function searchReviews (location) {
  const queryStr = toQueryString({
    location
  })

  const response = await window.fetch(`${PLATFORM_DOMAIN}/reviews` + queryStr, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  })

  if (!response.ok) {
    throw new Error('Failed to search reviews')
  }

  return response.json()
}

export async function addReview (review) {
  const response = await window.fetch(`${PLATFORM_DOMAIN}/reviews`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      item: review.item,
      assets: review.assets,
      rating: review.rating,
      userId: review.userId,
      content: review.content
    })
  })

  console.log(response.status)

  if (!response.ok) {
    throw new Error('Failed to add the review')
  }

  return response.json()
}

export async function addAsset (formData) {
  const form = new FormData()
  form.append('file', {
    uri: formData.uri,
    type: formData.type,
    name: `${Date.now()}.jpg`
  })

  Object.keys(formData.options).forEach(key => {
    if (typeof formData.options[key] !== 'string') {
      throw new Error('Option values need to be stringy')
    }

    form.append(key, formData.options[key])
  })

  const response = await window.fetch(`${PLATFORM_DOMAIN}/assets`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data'
    },
    body: form
  })

  if (!response.ok) {
    throw new Error('Failed to add the asset')
  }

  return response.json()
}
