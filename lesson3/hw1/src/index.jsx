// Found rootElem;
// create tags;
// add elems in text
// define date with moment
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting.jsx'



const rootElement=document.querySelector('#root');

ReactDOM.render(<Greeting firstName="John"
lastName= "Doe"
birthDate={new Date('2003-01-01T11:11:11.819Z')
    
}/>, rootElement)

// ${props.user.firstName} ${props.user.lastName}. I'm ${props.user.birthDate} 





