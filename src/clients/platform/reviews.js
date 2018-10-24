import { get, post } from './base'

export async function getReviews (location) {
  return get('/reviews', {
    query: {
      location
    }
  })
}

export async function makeReview (review) {
  return post('/reviews', {
    body: {
      item: review.item,
      assets: review.assets,
      rating: review.rating,
      user_id: review.user_id,
      content: review.content
    }
  })
}

export async function likeReview (id) {
  return post(`/review/${id}/likes`)
}
