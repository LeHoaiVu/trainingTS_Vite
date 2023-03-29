import { Card, CardContent, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '~/hooks/useAppSelector'
import { ILoginState } from '../LoginPage/redux/reducer'
import { getUserInfo } from './redux/actionCreators'
import { IUserInfoState } from './redux/reducer'

export interface IUserPageProps {}

export default function User(props: IUserPageProps) {
    const dispatch = useDispatch()

    const userLoginSelector: ILoginState = useAppSelector((state) => state.loginReducer)
    const userInfoSelector: IUserInfoState = useAppSelector((state) => state.userInfoReducer)

    useEffect(() => {
        userLoginSelector.loginData?.data?.userId &&
            dispatch(getUserInfo(userLoginSelector.loginData.data.userId))
    }, [userLoginSelector.loginData])

    return (
        <div>
            {userInfoSelector.userInfo?.data ? (
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                            {`${userInfoSelector.userInfo?.data[0].username}`}
                        </Typography>
                        <Typography variant='h5' component='div'>
                            {`${userInfoSelector.userInfo?.data[0].email}`}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                            {`${userInfoSelector.userInfo?.data[0].phone}`}
                        </Typography>
                        <Typography variant='body2'>Hello</Typography>
                    </CardContent>
                </Card>
            ) : (
                <Typography variant='h5' component='div'>
                    No user info
                </Typography>
            )}
        </div>
    )
}
