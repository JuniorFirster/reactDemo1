import * as actionTypes from './actionTypes';

export const increment = counterCaption => {
    return {
        type: actionTypes.INCREMENT,
        counterCaption,
    }
}

export const decrement = counterCaption => {
    return {
        type: actionTypes.DECREMENT,
        counterCaption,
    }
}