import home from './home'
import search from './search'
import profile from './profile'
import comments from './comments'
import addPlace from './add-place'
import addReview from './add-review'
import singleReview from './single-review'
import notifications from './notifications'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  home,
  search,
  profile,
  comments,
  addPlace,
  addReview,
  singleReview,
  notifications
})

export default rootReducer
