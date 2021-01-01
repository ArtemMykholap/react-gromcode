import {shallow} from 'enzyme';
import React from 'react';
import Mailbox from '../Mailbox';

describe ('Mailbox', ()=>{
  it('should not render count if no unread messages', ()=>{
    const wrapperComponent=shallow(<Mailbox unreadMessages={[]}/>);

    expect(wrapperComponent.find('.mailbox_count').exists())
    .toEqual(false);
  });
})


describe ('Mailbox', ()=>{
  it('should render correct of unread messages', ()=>{
    const unreadMessages=[1,2,3]
    const wrapperComponent=shallow(<Mailbox unreadMessages={unreadMessages}/>);
    expect(wrapperComponent.find('.mailbox__count').text())
    .toEqual("3");
  });
})