import { get, post } from './base'

export async function getComments (reviewId) {
  return get(`/reviews/${reviewId}/comments`)
}

export async function addComment (reviewId, content, parentCommentId) {
  return post(`/reviews/${reviewId}/comments`, {
    body: {
      parent_id: parentCommentId,
      content
    }
  })
}
