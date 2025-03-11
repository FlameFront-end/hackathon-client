import { type FC } from 'react'
import { Outlet } from 'react-router-dom'
import { FloatButton } from 'antd'

import { Nav } from '@/components'

const RouterProtect: FC = () => {
    return (
        <>
            <Outlet />
            <FloatButton.BackTop />
            <Nav/>
        </>
    )
}

export default RouterProtect
