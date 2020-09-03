
import React from 'react'
// import { mount, shallow } from 'enzyme'
import { Provider } from 'react-redux'
import Page1 from '../../src/app/ui/page1/index'
import configureStore from '../../src/store/index'
import { mount } from 'enzyme'

const store = configureStore();

describe('<Page1/>', () => {
    it('set props', () => {
        let wrapper = mount(
            <Provider store={store}>
                <Page1/>
            </Provider>,
        );
        
        // console.log(wrapper.find('#page1').length)
        // expect(wrapper.find('#page1').length).to.equal(1)

        wrapper.setProps({ bar: 'foo' });
        expect(wrapper.props().bar).toBe('foo');
    })

    // test('renders Scene', () => {
    //     const component = renderer.create(
    //             <Page1 />
    //     ).toJSON();

    //     expect(component).toMatchSnapshot();
    // });
})

