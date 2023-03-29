import { IResultResponse } from '~/utils/apiCall'
import { LoginAction, LoginActionType } from './actionTypes'

export interface ILoginState {
    loginData: IResultResponse
    loading: boolean
}

const initialState = {
    loginData: {
        data: { accessToken: '', refreshToken: '', userId: '' },
        errorCode: 0,
        message: '',
    },
    loading: false,
}

const loginReducer = (state: ILoginState = initialState, action: LoginAction): ILoginState => {
    switch (action.type) {
        case LoginActionType.LOGIN_PENDING:
            return {
                ...state,
                loading: true,
            }
        case LoginActionType.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                loginData: action.payload,
            }
        case LoginActionType.LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                loginData: action.payload,
            }
        case LoginActionType.LOGIN_CLEAR:
            return initialState
        default:
            return state
    }
}
export default loginReducer
