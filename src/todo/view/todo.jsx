import React from 'react';
import AddTodo from './addTodo';
import TodoList from './todoList';

const Todo = () => {
  return (
    <div className="todo-contain">
      <AddTodo/>
      <TodoList/>
    </div>
  )
}

export default Todo;