import { call, all } from 'redux-saga/effects'

import bootSaga from './boot'
import authSaga from './auth'
import usersSaga from './users'
import itemsSaga from './items'
import placesSaga from './places'
import reviewsSaga from './reviews'
import commentsSaga from './comments'

export default function * rootSaga () {
  yield all([
    call(bootSaga),
    call(authSaga),
    call(itemsSaga),
    call(usersSaga),
    call(placesSaga),
    call(reviewsSaga),
    call(commentsSaga)
  ])
}
