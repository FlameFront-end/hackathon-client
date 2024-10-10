import { type FC } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { FloatButton } from 'antd'
import { pathsConfig } from '@/pathsConfig'
import { useAuth } from '../features/auth/hooks/useAuth'
import { Nav } from '@/features/kit'

const RouterProtect: FC = () => {
    const { isAuth } = useAuth()
    const { pathname } = useLocation()

    // if (!isAuth && (pathname !== pathsConfig.login && pathname !== pathsConfig.register)) {
    //     return <Navigate to={pathsConfig.login} replace />
    // }

    if (isAuth && (pathname === pathsConfig.login)) {
        return <Navigate to={pathsConfig.speed} replace />
    }

    return (
        <>
            <Outlet />
            <FloatButton.BackTop />
            <Nav/>
        </>
    )
}

export default RouterProtect
