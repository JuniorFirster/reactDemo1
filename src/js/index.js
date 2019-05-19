import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Provider from './provider';
const rootDom = document.getElementById('root-dom');

ReactDOM.render(<Provider store={store}/>, rootDom);