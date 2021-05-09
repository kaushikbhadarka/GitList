/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as searchRepoReducer from './searchRepoReducer';
import * as repoListReducer from './repoListReducer';
export default Object.assign(loginReducer, loadingReducer,searchRepoReducer,repoListReducer);
