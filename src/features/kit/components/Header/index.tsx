import { type FC } from 'react'
import { pathsConfig } from '@/pathsConfig'
import { Link } from 'react-router-dom'

import { HeaderStyledWrapper } from './Header.styled.tsx'
import { useAppSelector } from '@/hooks'
import { useAuth } from '../../../auth/hooks/useAuth.ts'
import { TextButton } from '../Buttons'
import Flex from '../Flex'

import avaProfileWhite from '../../../../../public/avaProfileWhite.svg'
import avaProfileGold from '../../../../../public/avaProfileGold.svg'

interface Props {
    subheading: string
}

const Header: FC<Props> = () => {
    const user = useAppSelector(state => state.auth.user)
    const { logout } = useAuth()

    const handleLogoutClick = (): void => {
        logout()
    }

    return (
        <HeaderStyledWrapper>
            <Flex>
                <h1 className="heading">АЛЁ, <br/> Калуга!</h1>
            </Flex>
            {user?.isAuth ? <Flex>
                <div className="subheading">
                    <Link to={pathsConfig.profile}>Profile</Link>
                </div>
                <TextButton onClick={handleLogoutClick}>
                    Выход
                    <img src={avaProfileWhite} alt='q'/>
                </TextButton>
            </Flex> : <div className="subheading">
                <Link to={pathsConfig.login}>
                    Войти
                    <img src={avaProfileGold} alt='q'/>
                </Link>
            </div>}
        </HeaderStyledWrapper>
    )
}

export default Header
