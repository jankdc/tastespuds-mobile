import { get } from './base'

export async function getComments (reviewId) {
  return get(`/reviews/${reviewId}/comments`)
}
