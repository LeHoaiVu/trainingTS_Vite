import axios from 'axios'
import { VERBS } from '~/constants'
import { toJson } from './convert'

const customizeHeader: Record<string, any> = {
    // authorization,
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    // Authorization: '',
}

export interface IResultResponse {
    // data?: { accessToken?: string; refreshToken?: string; userId?: string }
    data?: any
    errorCode: number
    message: string
}

export const buildUrlParams = (url: string, params: any) => {
    let newUrl: string = `${url}?`
    Object.entries(params).forEach((entry) => {
        const [key, value] = entry
        newUrl = `${newUrl}${key}=${value}&`
    })
    return newUrl.slice(0, -1)
}

/* Call api by axios*/
export async function apiCall(
    url: string,
    method: string,
    payload: any,
    params: any,
    options: any,
) {
    const { retries = 0 } = options

    let result: IResultResponse = {
        data: undefined,
        errorCode: 0,
        message: '',
    }

    const access_token = localStorage.getItem('access_token')

    access_token && (customizeHeader.Authorization = `Bearer ${access_token}`)

    if (method === VERBS.GET && params) {
        url = buildUrlParams(url, params)
    }
    try {
        const response = await axios({
            method: method,
            url: url,
            headers: customizeHeader,
            data: payload,
            transformResponse: (data) => toJson(data, null),
        })
        result = response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (retries > 0) {
                apiCall(url, method, payload, params, { ...options, retries: retries - 1 })
            }
            result = error.response?.data
        } else {
            console.log(error)
        }
    }
    return result
}

/*Call api by fetch*/

// export async function apiCall(url: string, method: string, payload: any, options: any) {
//     const { retries = 0 } = options

//     let result: IResultResponse = {
//         data: { accessToken: '', refreshToken: '', userId: '' },
//         errorCode: 0,
//         message: '',
//     }
//     const response = await fetch(url, {
//         headers: customizeHeader,
//         method: method,
//         body: JSON.stringify(payload),
//     })
//     result = await response.json()
//     if (result.errorCode != 0 && retries > 0) {
//         apiCall(url, method, payload, { ...options, retries: retries - 1 })
//     }
//     return result
// }
