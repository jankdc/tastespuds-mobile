import { post } from './base'

export async function login (code) {
  return post('/oauth/login', {
    body: {
      code
    }
  })
}
