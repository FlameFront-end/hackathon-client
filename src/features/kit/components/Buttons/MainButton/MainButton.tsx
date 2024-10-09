import { type FC, type ReactNode } from 'react'
import { MainButtonStyledWrapper } from './MainButton.styled.tsx'

interface Props {
    onClick: () => void
    children: ReactNode
    color?: string
    isMain?: boolean
}

const MainButton: FC<Props> = ({ color, isMain, onClick, children }) => {
    return (
        <MainButtonStyledWrapper className={isMain ? 'main' : ''}>
            <button style={{ background: color }} onClick={onClick}>{children}</button>
        </MainButtonStyledWrapper>
    )
}

export default MainButton
