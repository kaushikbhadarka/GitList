// export action creators
import * as loginActions from './loginActions';
import * as searchRepoAction from './searchRepoAction';
import * as repoListAction from './repoListAction';
import * as navigationActions from './navigationActions';

export const ActionCreators = Object.assign(
  {},
  loginActions,
  searchRepoAction,
  repoListAction,
  navigationActions,
);
