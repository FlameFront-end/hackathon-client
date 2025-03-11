import { type FC } from 'react'

import { HeaderStyledWrapper } from './Header.styled.tsx'

const Header: FC = () => {
    return (
        <HeaderStyledWrapper>
            <h1 className="heading">IT project</h1>
        </HeaderStyledWrapper>
    )
}

export default Header
