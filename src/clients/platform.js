import { PLATFORM_DOMAIN } from 'react-native-dotenv'

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
