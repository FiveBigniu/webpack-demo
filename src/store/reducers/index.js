import {combineReducers} from 'redux'
import setUserState from './userReducer'
import setCommunication from './communicationReducer'
import setPerson from './personReducer'


export default combineReducers({
    setUserState,
    setCommunication,
    setPerson
})