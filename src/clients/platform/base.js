import { PLATFORM_DOMAIN } from 'react-native-dotenv'
import { toQueryString } from '../../utils/query'
import { SecureStore } from 'expo'

export class PlatformApiError extends Error {
  constructor (message, id) {
    super(message)
    this.id = id
    this.name = 'PlatformApiError'
  }
}

export async function get (path, options) {
  const url = `${PLATFORM_DOMAIN}${path}`
  const query = options.query ? toQueryString(options.query) : ''
  const token = await SecureStore.getItemAsync('accessToken')

  const response = await window.fetch(url + query, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      ...options.headers
    }
  })

  return extractResponse(response)
}

export async function del (path, options) {
  const url = `${PLATFORM_DOMAIN}${path}`
  const token = await SecureStore.getItemAsync('accessToken')

  const response = await window.fetch(url, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      ...options.headers
    }
  })

  return extractResponse(response)
}

export async function post (path, options) {
  const url = `${PLATFORM_DOMAIN}${path}`
  const body = options.body || {}
  const token = await SecureStore.getItemAsync('accessToken')

  const response = await window.fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...options.headers
    },
    body: JSON.stringify(body)
  })

  return extractResponse(response)
}

export async function form (path, options) {
  const url = `${PLATFORM_DOMAIN}${path}`
  const token = await SecureStore.getItemAsync('accessToken')
  const formData = new window.FormData()

  Object.keys(options.body).forEach(key => {
    formData.append(key, options.body[key])
  })

  const response = await window.fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
      ...options.headers
    },
    body: formData
  })

  return extractResponse(response)
}

async function extractResponse (response) {
  if (response.ok) {
    return response.json()
  }

  const { error: id, description } = await response.json()
  throw new PlatformApiError(description, id)
}
