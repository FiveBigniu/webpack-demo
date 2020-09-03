import { SET_USER_STATE } from '../actionType/index'
// import cookie from 'react-cookie'

const initInfo = {
    user: {
        username: 'admin',
        password: 'admin',
        username1:'she',
        password1:'she',
    },
    userState: sessionStorage.getItem('userState') || 0 //0 未登录 1 admin  2 she
}

export default function setUserState(state = initInfo, action) {
    switch (action.type) {
        case SET_USER_STATE: {
            // console.log(Object.assign({}, state, { userState: action.data }))
            sessionStorage.setItem('userState', action.data);
            // console.log(sessionStorage.getItem('userState')+'userState')
            return Object.assign({}, state, { userState: action.data });
        }
        default:
            return state;
    }
}
