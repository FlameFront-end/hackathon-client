import { type FC, type ReactNode } from 'react'

import {
    CardWrapper
} from './Card.styled.tsx'

interface Props {
    children: ReactNode
    className?: string
}

const Card: FC<Props> = ({ children, className }) => {
    return (
        <CardWrapper className={className}>
            {children}
        </CardWrapper>
    )
}

export default Card
