import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList.jsx'
import './index.scss';


const rootElement=document.querySelector('#root');

const users=[
    {
        age:10,
        name: 'Denis',
    },
    {
        age:27,
        name:' Bob',
    },
    {
        age:19,
        name: 'Tom',
    },
    {
        age:35,
        name: 'Jane',
    },
    {
        age:10,
        name: 'Denis12',
    },
    {
        age:78,
        name:' Bob11',
    },
    {
        age:59,
        name: 'Tommy',
    },
    {
        age:335,
        name: 'Janies',
    },

]



ReactDOM.render(<UsersList users={users}/>, rootElement)
