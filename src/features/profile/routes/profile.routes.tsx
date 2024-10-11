import { profilePaths } from './profile.paths.ts'
import Profile from '../pages'

export const profileRoutes = [
    {
        path: profilePaths.profile,
        element: <Profile />
    }
]
