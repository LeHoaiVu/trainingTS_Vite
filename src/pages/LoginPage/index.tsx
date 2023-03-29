import { yupResolver } from '@hookform/resolvers/yup'
import { Button, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomnizeModal from '~/components/Modal'
import { openModal } from '~/components/Modal/redux/actionCreators'
import { Paths } from '~/config/route-config'
import { useFocus } from '~/hooks/useFocus'
import { login } from '~/pages/LoginPage/redux/actionCreators'
import { useAppSelector } from '../../hooks/useAppSelector'
import { ILoginState } from './redux/reducer'
import { FormData, schema } from './validation'

interface IloginProps {}

export default function Login(props: IloginProps) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userLoginSelector: ILoginState = useAppSelector((state) => state.loginReducer)

    const onSubmit = async (data: FormData) => {
        await dispatch(login(data))
        reset({
            username: '',
            password: '',
        })
    }

    useEffect(() => {
        if (userLoginSelector.loginData?.data?.accessToken) {
            localStorage.setItem('access_token', userLoginSelector.loginData?.data?.accessToken)
            navigate(Paths.USER)
        }

        if (userLoginSelector.loginData?.errorCode != 0) {
            dispatch(openModal())
        }
    }, [userLoginSelector.loginData])

    useFocus('username')

    return (
        <form className='login' onSubmit={handleSubmit(onSubmit)}>
            <Typography variant='h5' className='login-title' mt={5} mb={8}>
                LOGIN
            </Typography>
            <TextField
                id='username'
                className='login-input'
                {...register('username')}
                label='User Name'
                variant='outlined'
                error={errors.username?.message ? true : false}
            />
            {errors.username ? (
                <Typography className='login-validation-text' fontSize={12} mb={5}>
                    {errors.username?.message}
                </Typography>
            ) : (
                <Typography className='login-validation-text' mb={5}></Typography>
            )}
            <TextField
                id='password'
                className='login-input'
                type='password'
                {...register('password')}
                label='Password'
                variant='outlined'
                error={errors.password?.message ? true : false}
            />
            {errors.password ? (
                <Typography className='login-validation-text' fontSize={12} mb={5}>
                    {errors.password?.message}
                </Typography>
            ) : (
                <Typography className='login-validation-text' mb={5}></Typography>
            )}
            <Button type='submit' variant='contained' className='login-button'>
                LOGIN
            </Button>
            <CustomnizeModal title='Login fail' modalText={userLoginSelector.loginData?.message} />
        </form>
    )
}
