/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';
import { ILoading } from 'app/models/reducers/loading';

const initialState: ILoading = {
  isLoginLoading: false,
};

export const loadingReducer = createReducer(initialState, {
  [types.ENABLE_LOADER](state: ILoading) {
    return { ...state, isLoginLoading: true };
  },
  [types.DISABLE_LOADER](state: ILoading) {
    return { ...state, isLoginLoading: false };
  },
});

