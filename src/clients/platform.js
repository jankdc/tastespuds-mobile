import { PLATFORM_DOMAIN } from 'react-native-dotenv'

export async function createUser (body) {
  const response = await window.fetch(`${PLATFORM_DOMAIN}/users`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  if (!response.ok) {
    throw new Error('Failed to create a user')
  }

  return response.json()
}
