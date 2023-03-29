import axios from 'axios'

// const handleAxiosError = (error: string) => {
// console.log(`error`, error)
// }

const axiosHeader = {
    // authorization,
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
}
export const axiosCaller = () => {
    const token: string = ''
    const authorization: string = `Bearer ${token}`
    const headers = token ? { ...axiosHeader, authorization } : axiosHeader

    const caller = axios.create({ headers })

    caller.interceptors.response.use(
        (response) => response,
        (error) => error,
    )
    return caller
}
