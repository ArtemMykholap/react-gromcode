import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Profile from './Profile.jsx';

   const userData = {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: new Date('1991-01-17T11:11:11.819Z'),
    birthPlace: 'London'
};


const rootElement=document.querySelector('#root');

ReactDOM.render(<Profile user={userData}/>, rootElement)
