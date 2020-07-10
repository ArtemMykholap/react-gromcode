import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList.jsx'
import './index.scss';


const rootElement=document.querySelector('#root');

const users=[
    {
        age:10,
        name: 'Denis',
        id:'8',
    },
    {
        age:27,
        name:'Bob',
        id:'7',
    },
    {
        age:19,
        name: 'Tom',
        id:'1',
    },
    {
        age:35,
        name: 'Jane',
        id:'2',
    },
    {
        age:10,
        name: 'Denis12',
        id:'3',
    },
    {
        age:78,
        name:' Bob11',
        id:'4',
    },
    {
        age:59,
        name: 'Tommy',
        id:'5',
    },
    {
        age:335,
        name: 'Janies',
        id:'6',
    },
    {
        age:3235,
        name: 'Janieees',
        id:'15',
    },

]



ReactDOM.render(<UsersList users={users}/>, rootElement)
