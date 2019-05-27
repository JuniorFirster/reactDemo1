import { filterDict } from '@config/dict';
import { SET_FILTER } from './actionTypes';

const filterReducer = (state = filterDict.ALL, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default filterReducer;