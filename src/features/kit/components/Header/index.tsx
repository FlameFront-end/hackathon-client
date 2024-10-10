import { type FC } from 'react'
import { pathsConfig } from '@/pathsConfig'
import { Link } from 'react-router-dom'

import { HeaderStyledWrapper } from './Header.styled.tsx'

// import { Search, Vector } from './img'

interface HeaderProps {
    subheading: string
}

const Header: FC<HeaderProps> = () => {
    return (
        <HeaderStyledWrapper>
            <h1 className='heading'>АЛЁ, <br/> Калуга!</h1>
            <div className='subheading'>
                <Link to={pathsConfig.login} data-type='login'>Войти</Link>
                {/* <Vector/> */}
                <Link to={pathsConfig.speed} data-type='speed'>
                    {/* <Search/> */}
                </Link>
            </div>
        </HeaderStyledWrapper>
    )
}

export default Header
