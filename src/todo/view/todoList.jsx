/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './todoItem';
import { todoToggle, todoRemove } from '../action';
import { filterDict } from '@config/dict';
import { throwError } from 'rxjs';

const TodoList = ({ toggleFn }) => {
  return(
    <ul className="todo-list">
      <TodoItem toggle={toggleFn} />
    </ul>
  )
}

const selectTodoList = (todos, filter) => {
  switch (filter) {
    case filterDict.ALL:
      return todos;
    case filterDict.COMPLETED:
      return todos.filter(item => item.completed);
    case filterDict.UNCOMPLETED:
      return todos.filter(item => !item.completed);
    default:
      throw new Error('filter类型错误');
  }
}

// 注意 这里的state是局部state，也就是全局state里有修改权限的那部分
const mapStateToProps = (state) => {
  return {
    todos: selectTodoList(state.todos, state.filter), 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFn: id => {
      dispatch(todoToggle(id));
    },
    removeFn: id => {
      dispatch(todoRemove(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(TodoList)