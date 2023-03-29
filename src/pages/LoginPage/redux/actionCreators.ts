import { Dispatch } from 'redux'
import { BASE_URL, VERBS } from '~/constants'
import { apiCall } from '~/utils'
import { FormData } from '../validation'
import { LoginAction, LoginActionType } from './actionTypes'

export const login = (loginData: FormData) => async (dispatch: Dispatch<LoginAction>) => {
    const loginPayload = {
        username: loginData?.username,
        password: loginData?.password,
    }
    dispatch({
        type: LoginActionType.LOGIN_PENDING,
    })
    const res = await apiCall(`${BASE_URL}/signin`, VERBS.POST, loginPayload, null, { retries: 0 })
    if (res.errorCode === 0) {
        dispatch({
            type: LoginActionType.LOGIN_SUCCESS,
            payload: res,
        })
    } else {
        dispatch({
            type: LoginActionType.LOGIN_FAIL,
            payload: res,
        })
    }
}

export const loginClear = () => async (dispatch: Dispatch<LoginAction>) => {
    const accessToken = localStorage.getItem('access_token')
    !accessToken &&
        dispatch({
            type: LoginActionType.LOGIN_CLEAR,
        })
}

// async function callLoginApi(loginData?: FormData) {
//     const res = await fetch('http://localhost:3001/signin', {
//         headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
//         method: 'POST',
//         body: JSON.stringify(loginData),
//     })
//     const result: LoginRes = await res.json()
//     console.log(result)
// }

// async function callLoginApi(loginData?: FormData) {
//     const res: LoginRes = await axiosCaller().post('http://localhost:3001/signin', {
//         username: loginData?.username,
//         password: loginData?.password,
//     })
//     console.log(res)
// }
