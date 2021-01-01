import {shallow} from 'enzyme';
import React from 'react';
import Message from '../Message';

describe ('Message', ()=>{
  it('should render text', ()=>{
    const text='abc'
    const wrapperComponent=shallow(<Message text={text}/>);

    expect(wrapperComponent.find('.message').text())
    .toEqual(text);
  });
})

describe ('Message', ()=>{
  it('should render text', ()=>{
    const wrapperComponent=shallow(<Message text={''}/>);
    expect(wrapperComponent.find('.message').exists())
    .toEqual(false);
  });
})


