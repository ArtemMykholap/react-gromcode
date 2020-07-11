import React from 'react';
import ReactDOM from 'react-dom';
import User from './User';
import './index.scss';

const rootElement=document.querySelector('#root');




ReactDOM.render(<User userId={'github'}/>, rootElement)
