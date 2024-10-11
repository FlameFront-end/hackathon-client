import { type FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { pathsConfig } from '@/pathsConfig'

import { useAppSelector } from '@/hooks'
import { TextButton } from '../Buttons'
import Flex from '../Flex'
import { HeaderStyledWrapper } from './Header.styled.tsx'

import avaProfileGold from '../../../../../public/avaProfileGold.svg'
import { Avatar } from 'antd'

interface Props {
    subheading: string
}

const Header: FC<Props> = () => {
    const user = useAppSelector(state => state.auth.user)

    const navigate = useNavigate()

    return (
        <HeaderStyledWrapper>
            <h1 className="heading">АЛЁ, <br/> Калуга!</h1>
            {user?.isAuth ? <Flex>
                <TextButton onClick={() => { navigate(pathsConfig.profile) }}>{user?.nick} <Avatar size='large' src={avaProfileGold}/></TextButton>
            </Flex> : <TextButton onClick={() => { navigate(pathsConfig.login) }}>
                Войти <Avatar size='large' src={avaProfileGold} alt='q'/>
            </TextButton>}
        </HeaderStyledWrapper>
    )
}

export default Header
