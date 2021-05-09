// import { takeEvery, all } from 'redux-saga/effects';
// import * as types from '../actions/types';
// import loginSaga from './loginSaga';

// export default function* watch() {
//   yield all([takeEvery(types.LOGIN_REQUEST, loginSaga)]);
// }

import { takeEvery, all,takeLeading } from 'redux-saga/effects';
import * as types from '../actions/types';
import * as loginSaga from './loginSaga';
import * as searchRepoSaga from './searchRepoSaga'

export default function* watch() {
  yield all([
    loginRequest(),
    searchRepoRequest()
  ]);
}

export function* loginRequest() {
  yield takeLeading(types.LOGIN_REQUEST, loginSaga.loginAsync);
}

export function* searchRepoRequest() {
  yield takeLeading(types.SEARCH_REPO_REQUEST, searchRepoSaga.searchRepoAsync);
}