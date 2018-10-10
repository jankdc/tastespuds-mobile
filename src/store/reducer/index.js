import user from './user'
import addReview from './add-review'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  user,
  addReview
})

export default rootReducer
