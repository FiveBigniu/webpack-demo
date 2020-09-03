
// import { setPerson, delPerson } from '../../../src/store/action/person-action'
import { SET_PERSON, DEL_PERSON } from '../../../src/store/actionType/index'
// import configureMockStore from 'redux-mock-store';
import createStore from '../../mockStore'

describe('actions', () => {
    it('setPerson', () => {
        const { mockStore, invoke } = createStore({})
        invoke((dispatch, getState) => {
            dispatch({type:SET_PERSON,data:'test'})
            getState()
        })
        expect(mockStore.dispatch).toHaveBeenCalledWith({type:SET_PERSON,data:'test'})
        expect(mockStore.getState).toHaveBeenCalled()
    });

    it('delPerson', () => {
        const { mockStore, invoke } = createStore({})
        invoke((dispatch, getState) => {
            dispatch({type:DEL_PERSON,data:0})
            getState()
        })
        expect(mockStore.dispatch).toHaveBeenCalledWith({type:DEL_PERSON,data:0})
        expect(mockStore.getState).toHaveBeenCalled()
    });
})

