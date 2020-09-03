import { SET_PERSON, DEL_PERSON } from '../actionType/index'


export function setPerson(data) {
    // return dispatch => (dispatch(delPerson(0))) 异步测试通过
    return {
        type: SET_PERSON,
        data,
    }
}

export function delPerson(data) {
    return {
        type: DEL_PERSON,
        data
    }
}