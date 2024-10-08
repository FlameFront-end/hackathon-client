import { type FC, type ReactNode } from 'react'

import {
    TextButtonWrapper
} from './TextButton.styled.tsx'

interface Props {
    children: ReactNode
    onClick: () => void
    className?: string
    disabled?: boolean
}

const TextButton: FC<Props> = ({ children, onClick, className, disabled = false }) => {
    return (
        <TextButtonWrapper onClick={onClick} className={className} disabled={disabled}>
            {children}
        </TextButtonWrapper>
    )
}

export default TextButton
