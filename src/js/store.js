import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const initValues = {
    first: 23,
    second: 29,
    third: 31,
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeEnhancers =composeEnhancers(
    applyMiddleware(
        reduxImmutableStateInvariant()
    )
);

const store = createStore(reducer, initValues, storeEnhancers);

export default store;
