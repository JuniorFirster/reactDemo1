import * as actionTypes from './actionTypes';

export default (state, action) => {
    const { type, counterCaption } = action;
    switch (type) {
        case actionTypes.INCREMENT:
            return { ...state, [counterCaption]: state[counterCaption] + 1 };
        case actionTypes.DECREMENT:
            return { ...state, [counterCaption]: state[counterCaption] - 1 };
        default: 
            return state;
    }
}