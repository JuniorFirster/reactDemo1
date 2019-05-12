import React from 'react';
import ReactDOM from 'react-dom';
import ClockComp from './clockComp';

const rootDom = document.getElementById('root-dom');
// const date = new Date().toLocaleDateString();
// const time = new Date().toLocaleTimeString();
// const timestamp = Date.now();
ReactDOM.render(<ClockComp />, rootDom)