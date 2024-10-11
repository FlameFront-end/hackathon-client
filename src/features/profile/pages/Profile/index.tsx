import { type FC } from 'react'
import { ProfileStyledWrapper } from './Profile.styled.tsx'
import { Avatar } from 'antd'
import avaProfile from '../../../../../public/avaProfileWhite.svg'
import { useGetProfileQuery } from '../../../auth/api/auth.api.ts'
import { formatDate } from '@/utils'
import Cookies from 'js-cookie'
import QrCode from '../../components/QrCode.tsx'
import { TextButton } from '@/features/kit'
import { useAuth } from '../../../auth/hooks/useAuth.ts'
import { pathsConfig } from '@/pathsConfig'
import { useNavigate } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'

const Profile: FC = () => {
    const { data: user, isFetching } = useGetProfileQuery(null)

    const token = Cookies.get('token')

    const { logout } = useAuth()
    const navigate = useNavigate()
    const handleLogoutClick = (): void => {
        navigate(pathsConfig.speed)
        logout()
    }

    return (
        <ProfileStyledWrapper>
            {!isFetching ? <div className='profile_container'>
                <div className='profile_header'>
                    <div className='header_avatar'>
                        <Avatar size='large' src={avaProfile}/>
                    </div>
                    <div className='header_name'>
                        <span>{user?.nick} </span>
                    </div>
                </div>
                <div className='profile_body'>
                    <div className='body_eamil'>
                        <span>Электронная почта:</span> <br/>
                        <span>{user?.email}</span>
                    </div>
                    <div className='body_registrationDate'>
                        <span>Дата регистрации:</span> <br/>
                        <span>{formatDate(user?.createdAt ?? '')}</span>
                    </div>
                </div>
                <div className="qr-btn">
                    {token && <QrCode token={token}/>}
                </div>
            </div> : <div className='loader'>
                <BeatLoader size='20px' color="#ffffff"/>
            </div>}

            <div className='profile_footer'>
                <TextButton onClick={handleLogoutClick}>Выход</TextButton>
            </div>

        </ProfileStyledWrapper>
    )
}

export default Profile
