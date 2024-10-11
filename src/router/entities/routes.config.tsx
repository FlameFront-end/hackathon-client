import NotFound404 from '../../pages/NotFound404'
import Layout from '../../containers/Layout'
import { authRoutes } from '../../features/auth/routes/auth.routes.tsx'
import { pathsConfig } from '@/pathsConfig'
import RouterProtect from '../RouterProtect.tsx'
import { mapRoutes } from '../../features/map/routes/map.routes.tsx'
import { speedRoutes } from '../../features/speed/routes/speed.routes.tsx'
import { historyRoutes } from '../../features/history/routes/history.routes.tsx'
import { profileRoutes } from '../../features/profile/routes/profile.routes.tsx'

export const routesConfig = [
    {
        element: <RouterProtect />,
        errorElement: <NotFound404 />,
        children: [
            {
                path: pathsConfig.speed,
                element: <Layout />,
                children: [
                    ...speedRoutes,
                    ...authRoutes,
                    ...mapRoutes,
                    ...historyRoutes,
                    ...profileRoutes
                ]
            }
        ]
    }
]
