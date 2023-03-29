import { Dispatch } from 'redux'
import { LoginAction, LoginActionType } from '../../pages/LoginPage/redux/actionTypes'
import { UserAction, UserActionType } from '../../pages/UserPage/redux/actionTypes'
import { GlobalAction, LogoutActionType } from '../globalActionTypes/index'

export const logout = () => async (dispatch: Dispatch<GlobalAction>) => {
    dispatch({
        type: LogoutActionType.LOGOUT_PENDING,
    })

    const accessToken = localStorage.getItem('access_token')

    !accessToken
        ? dispatch({
              type: LogoutActionType.LOGOUT_SUCCESS,
          })
        : dispatch({
              type: LogoutActionType.LOGOUT_FAIL,
          })
}
