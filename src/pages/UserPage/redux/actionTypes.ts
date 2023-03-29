import { IResultResponse } from '~/utils'

export enum UserActionType {
    GET_USER_INFO_PENDING = 'GET_USER_INFO_PENDING',
    GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS',
    GET_USER_INFO_FAIL = 'GET_USER_INFO_FAIL',
    GET_USER_INFO_CLEAR = 'GET_USER_INFO_CLEAR',
}

interface getUserInfoPending {
    type: UserActionType.GET_USER_INFO_PENDING
}

interface getUserInfoSuccess {
    type: UserActionType.GET_USER_INFO_SUCCESS
    payload: IResultResponse
}

interface getUserInfoFail {
    type: UserActionType.GET_USER_INFO_FAIL
    payload: IResultResponse
}

interface getUserInfoClear {
    type: UserActionType.GET_USER_INFO_CLEAR
}

export type UserAction =
    | getUserInfoPending
    | getUserInfoSuccess
    | getUserInfoFail
    | getUserInfoClear
