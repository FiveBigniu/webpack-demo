import { COMMUNICATION } from '../actionType/index'

const initData = {
    text: 0
}

export default function setCommunication(state = initData, action) {
    switch (action.type) {
        case COMMUNICATION: {
            let num = state.text+1;
            return Object.assign({}, state, { text: num });
        }
        default:
            return state;
    }
}