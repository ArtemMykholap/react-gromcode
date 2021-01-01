import {shallow} from 'enzyme';
import React from 'react';
import User from '../User';

describe ('User', ()=>{
  it('should not render count if no unread messages', ()=>{
    const name='Ado'
    const wrapperComponent=shallow(<User name={name}/>);

    expect(wrapperComponent.find('.user__name').text())
    .toEqual(name);
  });
})
describe ('User', ()=>{
  it('should not render count if no unread messages', ()=>{
    const age=29
    const wrapperComponent=shallow(<User age={age}/>);

    expect(wrapperComponent.find('.user__age').text())
    .toEqual('29');
  });
})


// describe ('Mailbox', ()=>{
//   it('should render correct of unread messages', ()=>{
//     const unreadMessages=[1,2,3]
//     const wrapperComponent=shallow(<Mailbox unreadMessages={unreadMessages}/>);
//     expect(wrapperComponent.find('.mailbox__count').text())
//     .toEqual("3");
//   });
// })