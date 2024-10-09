import { type FC } from 'react'
import './Header.styled.tsx'

interface HeaderProps {
    subheading: string
}

const Header: FC<HeaderProps> = ({ subheading }) => {
    return (
        <header className='header'>
            <h1 className='heading'>Алё, Калуга!</h1>
            <div className='subheading'>{subheading}</div>
        </header>
    )
}

export default Header
