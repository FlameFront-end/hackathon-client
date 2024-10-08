import { type FC } from 'react'
import { Outlet } from 'react-router-dom'
import Sider from '../../features/kit/components/Sider'
import MainHeader from '../../features/kit/components/MainHeader'
import { StyledContent, StyledLayout } from './Layout.styled.tsx'

const Layout: FC = () => {
    return (
        <>
            <MainHeader/>
            <StyledLayout hasSider>
                <Sider />
                <StyledContent>
                    <Outlet />
                </StyledContent>
            </StyledLayout>
        </>

    )
}

export default Layout
