import { type FC, type ReactNode } from 'react'
import { MainButtonStyledWrapper } from './MainButton.styled.tsx'

interface Props {
    onClick: () => void
    children: ReactNode
    color?: string
    isMain?: boolean
    className?: string
}

const MainButton: FC<Props> = ({ color, className, isMain, onClick, children }) => {
    return (
        <MainButtonStyledWrapper className={isMain ? 'main' : className}>
            <button style={{ background: color }} onClick={onClick}>
                {children}
            </button>
        </MainButtonStyledWrapper>
    )
}

export default MainButton
