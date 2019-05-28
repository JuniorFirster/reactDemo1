/**
 * createStore 创建store
 * combineReducers 合并不同模块的reducer
 * applyMiddleware 添加中间件
 * compose 目前来看，用于添加store enhancer(存储增强剂)的方法
 */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import todoReducer from './todo/reducer';
import filterReducer from './filter/recuder';

const reducer = combineReducers({
  todo: todoReducer,
  filter: filterReducer,
})

export default createStore(reducer,{});