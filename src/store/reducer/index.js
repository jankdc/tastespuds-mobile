import user from './user'
import home from './home'
import search from './search'
import profile from './profile'
import addReview from './add-review'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  user,
  home,
  search,
  profile,
  addReview
})

export default rootReducer
