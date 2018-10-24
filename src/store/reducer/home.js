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
      const review = state.reviews.find(r => r.id === action.value.id)
      const reviewIndex = state.reviews.indexOf(review)

      return {
        ...state,
        reviews: [
          ...state.reviews.slice(0, reviewIndex),
          {
            ...review,
            liked: true,
            num_of_likes: review.num_of_likes + 1
          },
          ...state.reviews.slice(reviewIndex + 1)
        ]
      }
    }
    default:
      return state
  }
}
