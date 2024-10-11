import { type FC } from 'react'
import { Link } from 'react-router-dom'
import { pathsConfig } from '@/pathsConfig'

import { useAppSelector } from '@/hooks'
import { useAuth } from '../../../auth/hooks/useAuth.ts'
import { TextButton } from '../Buttons'
import Flex from '../Flex'
import { HeaderStyledWrapper } from './Header.styled.tsx'

import avaProfileWhite from '../../../../../public/avaProfileWhite.svg'
import avaProfileGold from '../../../../../public/avaProfileGold.svg'
import avaWhite from '../../../../../public/avaWhite.svg'

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
            {pathsConfig.profile ? <Flex>
                <div className="subheading">
                    <Link to={pathsConfig.profile}>
                        {user.nick} <img src={avaWhite} alt=""/>
                    </Link>
                </div>
            </Flex> : <>
                {user?.isAuth ? <Flex>
                    <div className="subheading">
                        <Link to={pathsConfig.login}>
                            Войти <img src={avaProfileGold} alt='q'/>
                        </Link>
                    </div>
                </Flex> : <TextButton onClick={handleLogoutClick}>
                    Выход <img src={avaProfileWhite} alt='q'/>
                </TextButton>}
            </>
            }
        </HeaderStyledWrapper>
    )
}

export default Header
