import {shallow} from 'enzyme';
import React from 'react';
import Greeting from '../Greeting';

describe ('Greeting', ()=>{
  it('should display user greeting if user is logged in', ()=>{
    const wrappedComponent=shallow(<Greeting isLoggedIn/>);
    expect(wrappedComponent.find('UserGreeting').exists()).toBeTruthy()
  });
  it('should display user greeting if user is not logged in', ()=>{
    const wrappedComponent=shallow(<Greeting />);
    expect(wrappedComponent.find('GuestGreeting').exists()).toBeTruthy()
  });
})


