import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import { ISearchRepoState } from 'app/models/reducers/searchRepoReducerModel';
import {
  ISearchRepoRequestState,
  ISearchRepoResponseState,
} from 'app/models/actions/searchRepoActionModel';

const initialState = {
  responseData: [],
};

export const searchRepoReducer = createReducer(initialState, {
  [types.SEARCH_REPO_REQUEST](
    state: ISearchRepoState,
    action: ISearchRepoRequestState,
  ) {
    return {
      ...state,
      searchString: action.searchString,
    };
  },
  [types.SEARCH_REPO_RESPONSE](
    state: ISearchRepoState,
    action: ISearchRepoResponseState,
  ) {
    return {
      ...state,
      responseData:action.response
    };
  },
  [types.SEARCH_REPO_FAILED](state: ISearchRepoState) {
    return {
      ...state,
    };
  },
});
