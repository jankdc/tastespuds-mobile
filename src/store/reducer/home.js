import * as actions from '../actions'

const initialState = {
  reviews: null,
  isSearching: false,
  hasSearchedBefore: false
}

export default function home (state = initialState, action = {}) {
  switch (action.type) {
    case actions.SEARCH_REVIEWS:
      return {
        ...state,
        isSearching: true
      }

    case actions.SEARCH_REVIEWS_FAILED:
      return {
        ...state,
        isSearching: false
      }

    case actions.SEARCH_REVIEWS_PASSED:
      return {
        ...state,
        isSearching: false,
        hasSearchedBefore: true,
        reviews: action.value
      }

    case actions.LIKE_REVIEW: {
      const review = action.value

      return {
        ...state,
        reviews: updateReviewList(state.reviews, review.id, {
          likeIncrement: 1,
          caller_like_id: true
        })
      }
    }

    case actions.LIKE_REVIEW_PASSED: {
      const like = action.value

      return {
        ...state,
        reviews: updateReviewList(state.reviews, like.review_id, {
          likeIncrement: 0,
          caller_like_id: like.id
        })
      }
    }

    case actions.UNLIKE_REVIEW: {
      const review = action.value

      return {
        ...state,
        reviews: updateReviewList(state.reviews, review.id, {
          likeIncrement: -1,
          caller_like_id: false
        })
      }
    }

    default:
      return state
  }
}

function updateReviewList (reviews, reviewId, options) {
  const review = reviews.find(r => r.id === reviewId)
  const reviewIndex = reviews.indexOf(review)
  const updatedReview = {
    ...review,
    num_of_likes: review.num_of_likes + options.likeIncrement,
    context: {
      ...review.context,
      caller_like_id: options.caller_like_id
    }
  }

  return [
    ...reviews.slice(0, reviewIndex),
    updatedReview,
    ...reviews.slice(reviewIndex + 1)
  ]
}
