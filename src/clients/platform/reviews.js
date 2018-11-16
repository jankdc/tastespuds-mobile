import { del, get, post } from './base'

export async function getReviews (location) {
  return get('/reviews', {
    query: {
      location
    }
  })
}

export async function getReview (id) {
  return get(`/reviews/${id}`)
}

export async function makeReview (review) {
  return post('/reviews', {
    body: {
      item: review.item,
      assets: review.assets,
      rating: review.rating,
      user_id: review.user_id,
      content: review.content,
      highlight: review.highlight,
      suggestion: review.suggestion
    }
  })
}

export async function likeReview (reviewId) {
  return post(`/reviews/${reviewId}/likes`)
}

export async function unlikeReview (reviewId, likeId) {
  return del(`/reviews/${reviewId}/likes/${likeId}`)
}
