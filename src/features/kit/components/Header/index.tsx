import { type FC } from 'react'
import { HeaderStyledWrapper } from './Header.styled.tsx'

interface HeaderProps {
    subheading: string
}

const Header: FC<HeaderProps> = ({ subheading }) => {
    return (
        <HeaderStyledWrapper>
            <h1 className='heading'>Алё, Калуга!</h1>
            <div className='subheading'>{subheading}</div>
        </HeaderStyledWrapper>
    )
}

export default Header
