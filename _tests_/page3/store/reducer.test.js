import personReducer, { initInfo } from '../../../src/store/reducers/personReducer'
import * as actionType from '../../../src/store/actionType/index'
import Lodash from 'lodash'

describe('Reducer', () => {
    test('personReducer', () => {
        // console.log(personReducer(undefined, {}));
        expect(personReducer(undefined, {})).toEqual(initInfo);

        const setAction = { type: actionType.SET_PERSON, data: 'test' };
        const setData = initInfo.itemLists.concat('test');
        expect(personReducer(undefined, setAction)).toEqual({ itemLists: setData });

        const delAction = { type: actionType.DEL_PERSON, data: '0' }
        const delData = Lodash.slice(initInfo.itemLists, 1, initInfo.itemLists.length);
        expect(personReducer(undefined, delAction)).toEqual({ itemLists: delData });
    })
})