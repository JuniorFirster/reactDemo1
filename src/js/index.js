import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import App from './App';

const rootDom = document.getElementById('root-dom');

ReactDOM.render(<App store={store}/>, rootDom);