/* Redux saga class
 * logins the user into the app
 * requires username and password.
 */

import { put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as loginActions from 'app/store/actions/loginActions';

// Our worker Saga that logins the user
export function* loginAsync() {

  const response = { success: true, data: { id: 1 }, message: 'Success' };

  if (response.success) {
    yield put(loginActions.onLoginResponse(response.data));
  } else {
    yield put(loginActions.loginFailed());
    setTimeout(() => {
      Alert.alert('Gitlist', response.message);
    }, 200);
  }
}