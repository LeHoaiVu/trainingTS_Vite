import { Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '~/assets/scss/styles.scss'
import Header from '~/components/Header'
import NotFoundPage from '~/pages/NotFoundPage'
import Fallback from './components/Falllback'
import { useAppSelector } from './hooks/useAppSelector'
import { ILoginState } from './pages/LoginPage/redux/reducer'
import PrivateRoutes from './routes/private-route'
import PublicRoutes from './routes/public-route'

function App() {
    const [authed, setAuthed] = useState<boolean>(false)

    const userLoginSelector: ILoginState = useAppSelector((state) => state.loginReducer)
    const isLogin: boolean = !!userLoginSelector.loginData?.data.accessToken
    useEffect(() => {
        isLogin ? setAuthed(true) : setAuthed(false)
    }, [userLoginSelector.loginData])

    return (
        <div className='App'>
            <Suspense fallback={<Fallback />}>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        {PublicRoutes()}
                        {/* check login or not here */}
                        {authed && PrivateRoutes()}
                        {/* {PrivateRoutes()} */}
                        <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </div>
    )
}

export default App
