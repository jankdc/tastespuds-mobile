import {
  AUTH0_DOMAIN,
  AUTH0_AUDIENCE,
  AUTH0_CLIENT_ID
} from 'react-native-dotenv'

import { toQueryString } from '../utils/query'

export const authorizeUrl = () => `${AUTH0_DOMAIN}/authorize` + toQueryString({
  scope: 'openid offline_access',
  audience: AUTH0_AUDIENCE,
  client_id: AUTH0_CLIENT_ID,
  response_type: 'code'
})

export async function getAccessToken (refreshToken) {
  const response = await window.fetch(`${AUTH0_DOMAIN}/oauth/token`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      client_id: AUTH0_CLIENT_ID,
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    })
  })

  if (!response.ok) {
    throw new Error('Failed to refresh the token')
  }

  const { access_token: accessToken } = await response.json()

  return accessToken
}

export async function getUserInfo (accessToken) {
  const response = await window.fetch(`${AUTH0_DOMAIN}/userinfo`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  })

  if (!response.ok) {
    throw new Error('Failed to get user info')
  }

  return response.json()
}
