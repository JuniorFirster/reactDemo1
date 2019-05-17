import * as actionTypes from './actionTypes';
import  AddDispatcher from './addDispatcher';

export const increment = counterCaption => {
  AddDispatcher.dispatch({
    type: actionTypes.INCREMENT,
    counterCaption,
  })
}

export const decrement = counterCaption => {
  AddDispatcher.dispatch({
    type: actionTypes.DECREMENT,
    counterCaption,
  })
}
