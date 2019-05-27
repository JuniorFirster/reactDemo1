import * as actionTypes from './actionTypes';

export const setFilter = filterType => ({
  type: actionTypes.SET_FILTER,
  filter: filterType,
});