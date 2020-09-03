
import React from 'react'
import Home from '../../src/app/home/index'
import { mount } from 'enzyme'

test('Home set props', () => {
    const wrapper = mount(<Home />)
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).toBe('foo');
})

