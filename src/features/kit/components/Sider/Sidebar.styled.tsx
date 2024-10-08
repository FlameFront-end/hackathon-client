import styled from 'styled-components'

interface Props {
    collapsed: boolean
    theme: 'dark' | 'light'
}

export const SidebarContainer = styled.div<Props>`
    background-color: ${({ theme }) => theme.background};
    transition: width 0.3s;
    width: ${({ collapsed }) => (collapsed ? '80px' : '200px')};
    border-right: none;
    padding-top: 20px;

    //@media (max-width: 768px) {
    //    width: 0;
    //    position: absolute;
    //    z-index: 1;
    //}
`

export const MenuItemContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
    color: ${({ theme }) => theme.text};
    border-radius: 10px;

    &:hover {
        background-color: ${({ theme }) => theme.hover};
    }
`

export const MenuItemIcon = styled.div`
    margin-right: 16px;
`

export const MenuItemLabel = styled.div<Props>`
    display: ${({ collapsed }) => (collapsed ? 'none' : 'block')};
`

export const LogoutButton = styled.button<Props>`
    width: ${({ collapsed }) => (collapsed ? 40 : 160)}px;
    margin: 15px 20px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => (theme === 'dark' ? '#f0f0f0' : '#ffffff')};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: width 0.3s;
`

export const LogoutButtonLabel = styled.div<Props>`
    display: ${({ collapsed }) => (collapsed ? 'none' : 'block')};
    color: ${({ theme }) => (theme === 'dark' ? '#f0f0f0' : '#ffffff')};
`
