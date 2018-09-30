import { PLATFORM_DOMAIN } from 'react-native-dotenv'

export async function login (body) {
  const response = await window.fetch(`${PLATFORM_DOMAIN}/oauth/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      code: body.code
    })
  })

  if (!response.ok) {
    throw new Error('Failed to login the user')
  }

  return response.json()
}
