import {SET_USER_STATE } from '../actionType/index'


export function setUserState(data) {
    return {
        type: SET_USER_STATE,
        data,
    }
}