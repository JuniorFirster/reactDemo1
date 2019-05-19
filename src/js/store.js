import { createStore } from 'redux';
import reducer from './reducer';

const initValues = {
    first: 23,
    second: 29,
    third: 31,
}

const store = createStore(reducer, initValues);

export default store;
