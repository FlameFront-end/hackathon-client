import { type FC, useState } from 'react'
import { ProfileStyledWrapper } from './Profile.styled.tsx'
import { Avatar, Modal } from 'antd'
import avaProfile from '../../../../public/avaProfileWhite.svg'
import { useGetProfileQuery } from '../../auth/api/auth.api.ts'
import { formatDate } from '@/utils'
import { PinkButton } from '@/features/kit'
import Cookies from 'js-cookie'
import QRCode from 'react-qr-code'

const Profile: FC = () => {
    const { data: user, isFetching } = useGetProfileQuery(null)
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

    const token = Cookies.get('token')

    console.log('token', token)

    return (
        <ProfileStyledWrapper>
            {!isFetching && <div className='profile_container'>
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
                    <div className='body_numberOfRecords'>
                        <span>Количество записей:</span> <br/>
                        <span>{user?.histories?.length}</span>
                    </div>
                </div>
                <div className='qr-btn'>
                    <PinkButton onClick={() => { setIsModalVisible(true) }}>
                        Поделиться <br/>
                        профилем
                    </PinkButton>
                </div>
            </div>}

            <Modal
                open={isModalVisible}
                onCancel={() => { setIsModalVisible(false) }}
                footer={null}
            >
                {(token) && (
                    <QRCode
                        value={`http://localhost:5173/auth/login?token=${token}`}
                        size={120}
                        viewBox={'0 0 120 120'} />
                )}
            </Modal>
        </ProfileStyledWrapper>
    )
}

export default Profile
