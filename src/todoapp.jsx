import React from 'react';
import Todo from './todo/view/todo';
import Filter from './filter/view/filter';

function TodoApp() {
  return (
    <div>
      <Todo/>
      <Filter/>
    </div>
  )
}

export default TodoApp;