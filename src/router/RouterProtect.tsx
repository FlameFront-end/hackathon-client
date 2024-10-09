import { type JSX } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { FloatButton } from 'antd'
import { pathsConfig } from './entities/paths.config.ts'
import { useAuth } from '../features/auth/hooks/useAuth'

const RouterProtect = (): JSX.Element => {
    const { isAuth } = useAuth()
    const { pathname } = useLocation()

    if (!isAuth && (pathname !== pathsConfig.login && pathname !== pathsConfig.register)) {
        return <Navigate to={pathsConfig.login} replace />
    }
    if (isAuth && (pathname === pathsConfig.login)) {
        return <Navigate to={pathsConfig.root} replace />
    }

    return (
        <>
            <Outlet />
            <FloatButton.BackTop />
        </>
    )
}

export default RouterProtect
