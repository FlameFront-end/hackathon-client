import { type FC } from 'react'
import { useAuth } from '../../../auth/hooks/useAuth.ts'
import { useNavigate } from 'react-router-dom'
import { HomeOutlined } from '@ant-design/icons'

import {
    SidebarContainer,
    MenuItemContainer,
    MenuItemIcon,
    MenuItemLabel,
    LogoutButton,
    LogoutButtonLabel
} from './Sidebar.styled.tsx'
import { useAppSelector } from '../../../../hooks/useAppSelector.ts'

const Sidebar: FC = () => {
    const { logout } = useAuth()
    const navigate = useNavigate()
    const userId = useAppSelector(state => state.auth.user.id)
    const collapsed = false

    const handleLogoutClick = (): void => {
        logout()
    }

    const menuItems = [
        {
            label: 'Моя страница',
            key: 'root',
            icon: <HomeOutlined />,
            onClick: () => { navigate('', { state: { userId } }) }
        }
    ]

    return (
        <SidebarContainer collapsed={collapsed}>
            <div className="menu">
                {menuItems.map((item) => (
                    <MenuItemContainer key={item.key} onClick={item.onClick}>
                        <MenuItemIcon>{item.icon}</MenuItemIcon>
                        <MenuItemLabel collapsed={collapsed}>{item.label}</MenuItemLabel>
                    </MenuItemContainer>
                ))}
            </div>
            <LogoutButton collapsed={collapsed} onClick={handleLogoutClick}>
                <LogoutButtonLabel collapsed={collapsed}>Выход</LogoutButtonLabel>
            </LogoutButton>
        </SidebarContainer>
    )
}

export default Sidebar
