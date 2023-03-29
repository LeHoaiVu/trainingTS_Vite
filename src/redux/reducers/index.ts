import { combineReducers } from 'redux'
import loginReducer from '../../pages/LoginPage/redux/reducer'
import modalReducer from '../../components/Modal/redux/reducer'
import userInfoReducer from '../../pages/UserPage/redux/reducer'

const rootReducers = combineReducers({
    loginReducer,
    modalReducer,
    userInfoReducer,
})

export default rootReducers
