import * as types from './types';
import { ISearchRepoResponse } from 'app/models/api/searchRepoApiModel';

export function searchRepoRequest(searchString: string) {
  return {
    type: types.SEARCH_REPO_REQUEST,
    searchString,
  };
}

export function searchRepoFailed() {
  return {
    type: types.SEARCH_REPO_FAILED,
  };
}

export function searchRepoResponse(response: ISearchRepoResponse) {
  return {
    type: types.SEARCH_REPO_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.DISABLE_LOADER,
  };
}

