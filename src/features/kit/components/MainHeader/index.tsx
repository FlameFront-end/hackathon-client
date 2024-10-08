import { type FC } from 'react'
import { Avatar } from 'antd'
import ava from '../../../../../public/ava.png'
import { useAppSelector } from '../../../../hooks/useAppSelector.ts'
import TextButton from '../Buttons/TextButton'
import { getFullName } from '../../../../utils/getFullName.ts'
import { StyledMainHeader } from './MainHeader.styled.tsx'
import { Link, useNavigate } from 'react-router-dom'
import { pathsConfig } from '../../../../router/entities/paths.config.ts'

const MainHeader: FC = () => {
    const navigate = useNavigate()
    const user = useAppSelector(state => state.auth.user)

    return (
        <StyledMainHeader>
            <div className="content">
                <Link to={pathsConfig.root}>
                    Социальная сеть
                </Link>

                {user != null
                    ? <button
                        className='user_btn'>
                        <Avatar size={32} src={user.ava ?? ava}/>
                        {getFullName(user.surname ?? '', user.name ?? '', null)}
                    </button>
                    : <TextButton onClick={() => { navigate(pathsConfig.register) }}>Регистрация</TextButton>
                }
            </div>
        </StyledMainHeader>
    )
}

export default MainHeader
