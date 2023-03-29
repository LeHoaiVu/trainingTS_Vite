import routesConfig from '../config/route-config'
import { Route } from 'react-router-dom'

const PublicRoutes = () => {
    return routesConfig
        .filter((route) => !route.private)
        .map((route) => <Route key={route.path} path={route.path} element={<route.component />} />)
}
export default PublicRoutes
