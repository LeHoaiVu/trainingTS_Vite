import { Dispatch } from 'redux'
import { apiCall } from '~/utils'
import { UserAction, UserActionType } from './actionTypes'
import { BASE_URL, VERBS } from '~/constants'

export const getUserInfo = (userId: string) => async (dispatch: Dispatch<UserAction>) => {
    dispatch({
        type: UserActionType.GET_USER_INFO_PENDING,
    })
    const res = await apiCall(
        `${BASE_URL}/accounts`,
        VERBS.GET,
        null,
        { id: userId },
        { retries: 0 },
    )
    if (res.errorCode === 0) {
        dispatch({
            type: UserActionType.GET_USER_INFO_SUCCESS,
            payload: res,
        })
    } else {
        dispatch({
            type: UserActionType.GET_USER_INFO_FAIL,
            payload: res,
        })
    }
}

export const userInfoClear = () => async (dispatch: Dispatch<UserAction>) => {
    const accessToken = localStorage.getItem('access_token')
    !accessToken &&
        dispatch({
            type: UserActionType.GET_USER_INFO_CLEAR,
        })
}
