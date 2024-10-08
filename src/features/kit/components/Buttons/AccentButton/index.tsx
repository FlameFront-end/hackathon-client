import { type FC, type ReactNode } from 'react'
import { StyledAccentButton } from './AccentButton.styled.tsx'

interface Props {
    onClick: () => void
    children: ReactNode
}

const AccentButton: FC<Props> = ({ onClick, children }) => {
    return (
        <StyledAccentButton onClick={onClick}>
            {children}
        </StyledAccentButton>
    )
}

export default AccentButton
