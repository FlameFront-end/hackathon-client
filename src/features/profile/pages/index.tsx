import { type FC } from 'react'
import { ProfileStyledWrapper } from './Profile.styled.tsx'
import { Avatar } from 'antd'
import avaProfile from '../../../../public/avaProfileWhite.svg'

import { Header } from '@/features/kit'
const Profile: FC = () => {
    // const { name, email, location, numberOfRecords } =

    return (
        <>
            <Header subheading="Карта качества связи"/>
            <ProfileStyledWrapper>
                <div className='profile_container'>
                    <div className='profile_header'>
                        <div className='header_avatar'>
                            <Avatar size='large' src={avaProfile}/>
                        </div>
                        <div className='header_name'>
                            <span>Имя пользователя {} </span>
                        </div>
                    </div>
                    <div className='profile_body'>
                        <div className='body_eamil'>
                            <span>Электронная почта:</span> <br/>
                            {} <span>as</span>
                        </div>
                        <div className='body_registrationDate'>
                            <span>Дата регистрации:</span> <br/>
                            {} <span>as</span>
                        </div>
                        <div className='body_numberOfRecords'>
                            <span>Количество записей:</span> <br/>
                            {} <span>as</span>
                        </div>
                    </div>
                    <div className='profile_btn'>
                        {} <span>as</span>
                    </div>
                </div>
            </ProfileStyledWrapper>
        </>
    )
}

export default Profile
