import * as actionTypes from './actionTypes';
let nextTodoId = 0;
export const todoAdd = text => ({
  type: actionTypes.TODO_ADD,
  text,
  id: nextTodoId++,
  completed: false,
});

export const todoToggle = id => ({
  type: actionTypes.TODO_TOGGLE,
  id,
});

export const todoRemove = id => ({
  type: actionTypes.TODO_REMOVE,
  id,
});