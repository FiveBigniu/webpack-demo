
import React from 'react'
import { Provider } from 'react-redux'
import Page3 from '../../src/app/ui/page3/index'
import renderer from 'react-test-renderer';
import configureStore from '../../src/store/index'
// import Enzyme from '../setupTests'
import {mount} from 'enzyme'
import { setPerson, delPerson } from '../../src/store/action/person-action'
import createStore from '../mockStore'

// const { mount, shallow } = Enzyme;
jest.mock('../../src/store/action/person-action');

const store = configureStore();

/**
 * 单元测试流程
 * 1.init 查看dom是否如期渲染
 * 2.render 查看数据是否如期渲染 数据=dom
 * 3.事件 查看事件是否如期执行
 * 4.快照用于比较页面结构是否发生改变 
 * 
 * action测试 1.mock action 2.虚拟store创建
 */

const initialState = {
    setPerson: {
        itemLists: ['test']
    }
};

const { mockStore } = createStore(initialState);

describe('<Page3/>', () => {
    
    it('init', () => {
        let wrapper = mount(
            <Provider store={store}>
                <Page3 />
            </Provider>
        );
        const addContainer = wrapper.find('.add-container')
        expect(addContainer.length).toBe(1);

        const listsBox = wrapper.find('.lists-box')
        expect(listsBox.length).toBe(1);

        const input = wrapper.find('input');
        expect(input.length).toBe(1);

        const btn = wrapper.find('button');
        expect(btn.length).toBe(1);
    })

    it('render', () => {
        let wrapper = mount(
            <Provider store={store}>
                <Page3 />
            </Provider>
        );
        const state = wrapper.props().store.getState().setPerson.itemLists;
        const lis = wrapper.find('li span');
        let liText = lis.map((item) => item.text());
        expect(liText).toEqual(state);
    })

    test('input change', () => {
        let wrapper = mount(
            <Provider store={store}>
                <Page3 />
            </Provider>
        );
        const event = { target: { value: 'Anna' } };
        const input = wrapper.find('Page3 input');
        input.simulate('change', event);
        expect(wrapper.find('input').prop('value')).toBe('Anna');
    })

    test('add person', () => {
        let wrapper = mount(
            <Provider store={mockStore}>
                <Page3 />
            </Provider>
        );

        let Page = wrapper.find('Page3');
        Page.setState({ item: 'Jeff' });

        const btn = wrapper.find('button');
        btn.simulate('click');
        expect(setPerson).toBeCalledWith('Jeff');
    })

    test('delete person', () => {
        let wrapper = mount(
            <Provider store={mockStore}>
                <Page3 />
            </Provider>
        );

        const btn = wrapper.find('.close');
        btn.first().simulate('click');
        expect(delPerson).toBeCalledWith(0);
        //const actions = mockStore.getActions();
        //expect(actions).toEqual([delPerson(0)]);
    })

    test('snapshot', () => {
        const component = renderer.create(
            <Provider store={store}>
                <Page3 />
            </Provider>
        ).toJSON();
        expect(component).toMatchSnapshot();
    });
})

