import { call, all } from 'redux-saga/effects'

import bootSaga from './boot'
import authSaga from './auth'
import itemsSaga from './items'
import placesSaga from './places'

export default function * rootSaga () {
  yield all([
    call(bootSaga),
    call(authSaga),
    call(itemsSaga),
    call(placesSaga)
  ])
}
