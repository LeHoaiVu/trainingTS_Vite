import { Route } from 'react-router-dom'
import routesConfig from '../config/route-config'

const PrivateRoutes = () => {
    return routesConfig
        .filter((route) => route.private)
        .map((route) => <Route key={route.path} path={route.path} element={<route.component />} />)
}

export default PrivateRoutes
