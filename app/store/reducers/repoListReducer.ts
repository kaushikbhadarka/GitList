/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

const initialState = {
  data: [],
};

export const repoListReducer = createReducer(initialState, {
  [types.ADD_REPO_TO_LIST](state, action) {
    
    return {
      ...state,
      data: state.data.concat(action.data),
    };
  },
  [types.REMOVE_REPO_FROM_LIST](state, action) {
    return {
      ...state,
      data: state.data.filter(item => item.id !== action.id)
    };
  },
});
