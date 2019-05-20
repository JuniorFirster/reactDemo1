import * as actionTypes from './actionTypes';

export default (state, action) => {
    const { type, counterCaption } = action;
    switch (type) {
        case actionTypes.INCREMENT:
            return { ...state, [counterCaption]: state[counterCaption] };
        case actionTypes.DECREMENT:
            return { ...state, [counterCaption]: state[counterCaption] };
        default: 
            return state;
    }
}