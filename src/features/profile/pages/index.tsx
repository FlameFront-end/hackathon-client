import { type FC } from 'react'
import { ProfileStyledWrapper } from './Profile.styled.tsx'
import { Avatar } from 'antd'
import avaProfile from '../../../../public/avaProfile.png'

const Profile: FC = () => {
    // const { name, email, location, numberOfRecords } =

    return (
        <ProfileStyledWrapper>
            <div className='profile_header'>
                <div className='header_avatar'>
                    <Avatar size='large' src={avaProfile}/>
                </div>
                <div className='header_name'>
                    <span>Имя пользователя </span> <br/>
                    {}
                </div>
            </div>
            <div className='profile_body'>
                <div className='body_eamil'>
                    <span>Электронная почта:</span> <br/>
                    {}
                </div>
                <div className='body_registrationDate'>
                    <span>Дата регистрации:</span> <br/>
                    {}
                </div>
                <div className='body_numberOfRecords'>
                    <span>Количество записей:</span> <br/>
                    {}
                </div>
            </div>
            <div className='profile_QR'>
                {}
            </div>
        </ProfileStyledWrapper>
    )
}

export default Profile
