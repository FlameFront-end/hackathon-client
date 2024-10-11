import { type FC, type ReactNode } from 'react'
import { PinkButtonStyled } from './PinkButton.styled.tsx'

interface Props {
    children: ReactNode
    onClick?: () => void
    className?: string
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
}

const PinkButton: FC<Props> = ({ className, onClick, children, type, disabled }) => {
    return (
        <PinkButtonStyled className={className} onClick={onClick} type={type} disabled={disabled}>
            {children}
        </PinkButtonStyled>
    )
}

export default PinkButton
