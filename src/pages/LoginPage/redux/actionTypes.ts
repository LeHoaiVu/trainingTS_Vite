import { IResultResponse } from '~/utils'

export enum LoginActionType {
    LOGIN_PENDING = 'LOGIN_PENDING',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAIL = 'LOGIN_FAIL',
    LOGIN_CLEAR = 'LOGIN_CLEAR',
}

interface loginPending {
    type: LoginActionType.LOGIN_PENDING
}
interface loginSuccess {
    type: LoginActionType.LOGIN_SUCCESS
    payload: IResultResponse
}
interface loginFail {
    type: LoginActionType.LOGIN_FAIL
    payload: IResultResponse
}

interface loginClear {
    type: LoginActionType.LOGIN_CLEAR
}

export type LoginAction = loginPending | loginSuccess | loginFail | loginClear
