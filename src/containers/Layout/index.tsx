import { type FC } from 'react'
import { Outlet } from 'react-router-dom'
import { StyledLayout } from './Layout.styled.tsx'
import { Content } from 'antd/es/layout/layout'

const Layout: FC = () => {
    return (
        <StyledLayout hasSider>
            <Content>
                <Outlet />
            </Content>
        </StyledLayout>
    )
}

export default Layout
