import { IResultResponse } from '../../../utils/apiCall'
import { UserAction, UserActionType } from './actionTypes'

export interface IUserInfoState {
    userInfo: IResultResponse
    loading: boolean
}

const initialState = {
    userInfo: {
        data: undefined,
        errorCode: 0,
        message: '',
    },
    loading: false,
}

const userInfoReducer = (
    state: IUserInfoState = initialState,
    action: UserAction,
): IUserInfoState => {
    switch (action.type) {
        case UserActionType.GET_USER_INFO_PENDING:
            return {
                ...state,
                loading: true,
            }
        case UserActionType.GET_USER_INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: action.payload,
            }
        case UserActionType.GET_USER_INFO_FAIL:
            return {
                ...state,
                userInfo: action.payload,
            }
        case UserActionType.GET_USER_INFO_CLEAR:
            return initialState
        default:
            return state
    }
}

export default userInfoReducer
