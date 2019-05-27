import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TodoApp from './todoapp';
const rootDom = document.getElementById('root-dom');
ReactDOM.render(
<Provider store={store}>
  <TodoApp/>
</Provider>,
rootDom);