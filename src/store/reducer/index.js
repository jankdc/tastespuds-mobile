import user from './user'
import home from './home'
import search from './search'
import addReview from './add-review'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  user,
  home,
  search,
  addReview
})

export default rootReducer
