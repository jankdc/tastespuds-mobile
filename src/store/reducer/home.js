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
          likeIncrement: 1
        })
      }
    }

    case actions.UNLIKE_REVIEW: {
      const review = action.value

      return {
        ...state,
        reviews: updateReviewList(state.reviews, review.id, {
          likeIncrement: -1
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
    num_of_likes: review.num_of_likes + options.likeIncrement
  }

  return [
    ...reviews.slice(0, reviewIndex),
    updatedReview,
    ...reviews.slice(reviewIndex + 1)
  ]
}
