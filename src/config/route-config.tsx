import { lazy } from 'react'
import { ListRoutes } from '~/types'

const Home = lazy(() => import('~/pages/HomePage'))
const Login = lazy(() => import('~/pages/LoginPage'))
const User = lazy(() => import('~/pages/UserPage'))

export const Paths = {
    HOME: '/',
    LOGIN: '/login',
    USER: '/user',
}

const routesConfig: ListRoutes = [
    {
        path: Paths.HOME,
        component: Home,
        private: false,
    },
    {
        path: '/login',
        component: Login,
        private: false,
    },
    {
        path: '/user',
        component: User,
        private: true,
    },
]

export default routesConfig
