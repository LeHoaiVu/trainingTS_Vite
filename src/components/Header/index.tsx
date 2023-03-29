import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useAppSelector } from '~/hooks/useAppSelector'
import { loginClear } from '~/pages/LoginPage/redux/actionCreators'
import { ILoginState } from '~/pages/LoginPage/redux/reducer'
import { logout } from '~/redux/globalActionCreator'
import { Paths } from '../../config/route-config'
import { userInfoClear } from '../../pages/UserPage/redux/actionCreators'

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
    const userLoginSelector: ILoginState = useAppSelector((state) => state.loginReducer)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.clear()
        dispatch(loginClear())
        dispatch(userInfoClear())
        dispatch(logout())
        navigate(Paths.HOME)
    }

    return (
        <div className='header'>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static'>
                    <Toolbar>
                        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                            Training
                        </Typography>
                        <Link to={Paths.HOME} className='header-button'>
                            <Button color='inherit'>Home</Button>
                        </Link>
                        {userLoginSelector.loginData.data.accessToken ? (
                            <Link to='/' className='header-button'>
                                <Button color='inherit' onClick={handleLogout}>
                                    Logout
                                </Button>
                            </Link>
                        ) : (
                            <Link to='/login' className='header-button'>
                                <Button color='inherit'>Login</Button>
                            </Link>
                        )}
                        <Link to='/user' className='header-button'>
                            <Button color='inherit'>User</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Box>
            <Outlet />
        </div>
    )
}
