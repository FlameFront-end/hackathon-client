import { authPaths } from '../../features/auth/routes/auth.paths.ts'
import { mapPaths } from '../../features/map/routes/map.paths.ts'
import { speedPaths } from '../../features/speed/routes/speed.paths.ts'
import { historyPaths } from '../../features/history/routes/history.paths.ts'

export const pathsConfig = {
    ...speedPaths,
    ...authPaths,
    ...mapPaths,
    ...historyPaths
}
