import {
  AUTH0_DOMAIN,
  AUTH0_AUDIENCE,
  AUTH0_CLIENT_ID
} from 'react-native-dotenv';

import { toQueryString } from '../utils/query';

export const authorizeUrl = (redirectUri) => `${AUTH0_DOMAIN}/authorize` + toQueryString({
  scope: 'openid offline_access',
  audience: AUTH0_AUDIENCE,
  client_id: AUTH0_CLIENT_ID,
  redirect_uri: redirectUri,
  response_type: 'code'
});

export async function getAccessToken(refreshToken) {
  const response = await fetch(`${AUTH0_DOMAIN}/oauth/token`, {
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
  });

  if (!response.ok) {
    throw new Error('Failed to refresh the token');
  }

  const { access_token } = await response.json();

  return access_token;
}

export async function getProfileToken(accessToken) {
  const response = await fetch(`${AUTH0_DOMAIN}/userinfo`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  });

  if (!response.ok) {
    throw new Error('Failed to get user info');
  }

  return response.json();
}
