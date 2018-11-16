import home from './home'
import search from './search'
import profile from './profile'
import addReview from './add-review'
import singleReview from './single-review'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  home,
  search,
  profile,
  addReview,
  singleReview
})

export default rootReducer
