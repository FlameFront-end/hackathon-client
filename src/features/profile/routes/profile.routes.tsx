import { profilePaths } from './profile.paths.ts'
import Profile from '../pages/Profile'

export const profileRoutes = [
    {
        path: profilePaths.profile,
        element: <Profile />
    }
]
