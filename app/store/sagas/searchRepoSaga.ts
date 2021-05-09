import { put,call } from 'redux-saga/effects';
import { Alert } from 'react-native';
import searchRepoApi from 'app/services/searchRepoApi';
import * as searchRepoAction from 'app/store/actions/searchRepoAction';

export function* searchRepoAsync(action) {
  const response = yield call(searchRepoApi, action.searchString);

  if (!response.incomplete_results) {
    yield put(searchRepoAction.searchRepoResponse(response));
  } else {
    yield put(searchRepoAction.searchRepoFailed());
    setTimeout(() => {
      Alert.alert('Gitlist', response.message);
    }, 200);
  }
}
