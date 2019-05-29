/**
 * createStore 创建store
 * combineReducers 合并不同模块的reducer
 * applyMiddleware 添加中间件
 * compose 目前来看，用于添加store enhancer(存储增强剂)的方法
 */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import { createStore, applyMiddleware, compose } from 'redux';
import todoReducer from './todo/reducer';
import filterReducer from './filter/recuder';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const reducer = combineReducers({
  todo: todoReducer,
  filter: filterReducer,
});

// const middlewares = [reduxImmutableStateInvariant()];

const storeEnhancer = compose(applyMiddleware(reduxImmutableStateInvariant()));

export default createStore(reducer,{}, storeEnhancer);