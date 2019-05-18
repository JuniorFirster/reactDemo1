import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counterComponent/view/Counter';
const rootDom = document.getElementById('root-dom');
const caption = "first";//临时
ReactDOM.render(<Counter caption={caption}/>, rootDom)