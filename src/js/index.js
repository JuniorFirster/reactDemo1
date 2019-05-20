import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Provider from './provider';
import CounterPanel from './view/CounterPanel';
const rootDom = document.getElementById('root-dom');

ReactDOM.render(
<Provider store={store}>
  <CounterPanel/>
</Provider>,
rootDom
);