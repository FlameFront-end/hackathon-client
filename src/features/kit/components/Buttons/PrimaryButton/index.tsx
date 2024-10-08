import { type FC, type ReactNode } from 'react'
import { StyledPrimaryButton } from './PrimaryButton.styled.tsx'

interface Props {
    children?: ReactNode
    onClick: () => void
    icon?: ReactNode
    positionIcon?: 'start' | 'end'
    className?: string
}

const PrimaryButton: FC<Props> = ({ children, onClick, icon, positionIcon = 'start', className }) => {
    return (
        <StyledPrimaryButton className={className} onClick={onClick}>
            {positionIcon === 'start' && (icon != null) ? <div className='icon-wrapper'>
                {icon}
            </div> : null}

            <div>
                {children}
            </div>

            {positionIcon === 'end' && (icon != null) ? <div className='icon-wrapper'>
                {icon}
            </div> : null}
        </StyledPrimaryButton>
    )
}

export default PrimaryButton
