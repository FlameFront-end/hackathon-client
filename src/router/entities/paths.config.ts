import { authPaths } from '../../features/auth/routes/auth.paths.ts'

export const pathsConfig = {
    root: '/',
    ...authPaths
}
