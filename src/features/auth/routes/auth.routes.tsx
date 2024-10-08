import { authPaths } from './auth.paths'
import Login from '../pages/Login'
import Register from '../pages/Register'

export const authRoutes = [
    {
        path: authPaths.login,
        element: <Login />
    },
    {
        path: authPaths.register,
        element: <Register />
    }
]
