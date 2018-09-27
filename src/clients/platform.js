import { PLATFORM_DOMAIN } from 'react-native-dotenv'

export async function login (body) {
  const response = await window.fetch(`${PLATFORM_DOMAIN}/oauth/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: body.email
    })
  })

  if (!response.ok) {
    throw new Error('Failed to login the user')
  }

  return response.json()
}

export async function verify (body) {
  const response = await window.fetch(`${PLATFORM_DOMAIN}/oauth/verify`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: body.email,
      code: body.code
    })
  })

  if (!response.ok) {
    throw new Error('Failed to verify the user')
  }

  return response.json()
}

export async function register (body) {
  const response = await window.fetch(`${PLATFORM_DOMAIN}/oauth/register`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: body.name,
      email: body.email
    })
  })

  if (!response.ok) {
    throw new Error('Failed to register the user')
  }

  return response.json()
}
