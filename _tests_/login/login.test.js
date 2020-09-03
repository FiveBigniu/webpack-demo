
import React from 'react'
import { Provider } from 'react-redux'
import Login from '../../src/app/login/index'
import configureStore from '../../src/store/index'
import { mount } from 'enzyme'

const store = configureStore();

describe('<Login/>', () => {
    it('get store', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Login />
            </Provider>,
        );
        // let username = wrapper.props().store.getState().setUserState.user.username;
        // expect(username).toBe('admin');

        // const input = wrapper.find('input');
        // expect(input.length).toBe(2)
    })
})

