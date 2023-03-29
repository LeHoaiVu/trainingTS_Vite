export enum LogoutActionType {
    LOGOUT_PENDING = 'LOGOUT_PENDING',
    LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
    LOGOUT_FAIL = 'LOGOUT_FAIL',
}

interface logOutPending {
    type: LogoutActionType.LOGOUT_PENDING
}
interface logOutSuccess {
    type: LogoutActionType.LOGOUT_SUCCESS
}
interface logOutFail {
    type: LogoutActionType.LOGOUT_FAIL
}

export type GlobalAction = logOutPending | logOutSuccess | logOutFail
