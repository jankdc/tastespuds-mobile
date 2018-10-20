import user from './user'
import home from './home'
import addReview from './add-review'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  user,
  home,
  addReview
})

export default rootReducer
