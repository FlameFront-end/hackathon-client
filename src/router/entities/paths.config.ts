import { authPaths } from '../../features/auth/routes/auth.paths.ts'
import { mapPaths } from '../../features/map/routes/map.paths.ts'
import { speedPaths } from '../../features/speed/routes/speed.paths.ts'
import { geoDataPaths } from '../../features/geoData/routes/geoData.paths.ts'

export const pathsConfig = {
    ...speedPaths,
    ...authPaths,
    ...mapPaths,
    ...geoDataPaths
}
