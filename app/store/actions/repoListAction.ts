/*
 * Reducer actions related with login
 */
import * as types from './types';

export function addRepoToList(data) {
  return {
    type: types.ADD_REPO_TO_LIST,
    data,
  };
}

export function removeRepoFromList(id: number) {
  return {
    type: types.REMOVE_REPO_FROM_LIST,
    id,
  };
}