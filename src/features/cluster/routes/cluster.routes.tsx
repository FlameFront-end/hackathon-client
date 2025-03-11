import { ClusterPaths } from './cluster.paths.ts'
import Cluster from '../pages'

export const clusterRoutes = [
    {
        path: ClusterPaths.cluster,
        element: <Cluster />
    }
]
