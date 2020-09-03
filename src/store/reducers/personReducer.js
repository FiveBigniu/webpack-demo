import { SET_PERSON, DEL_PERSON } from '../actionType/index'

export const initInfo = {
    itemLists: ['小明', '小红', '安吉丽娜']
}

export default function setUserState(state = initInfo, action) {
    switch (action.type) {
        case SET_PERSON: {
            // console.log(Object.assign({}, state, { itemLists: state.itemLists.concat(action.data) }))
            return Object.assign({}, state, { itemLists: state.itemLists.concat(action.data) })
        }
        case DEL_PERSON: {
            state.itemLists.splice(action.data, 1);
            return Object.assign({}, state, { itemLists: state.itemLists });
        }
        default:
            return state;
    }
}
