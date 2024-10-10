import { type FC } from 'react'
import { HistoryWrapper } from './History.styled.tsx'
import { Header } from '@/features/kit'
import App from '../components/Tables/index.tsx'

const History: FC = () => {
    return (
        <HistoryWrapper>
            <Header subheading='Геоданные и измерения' />
            <div className='history'>
                <App data={[
                    {
                        name: {
                            title: 'Имя пользователя',
                            text: 'название локации'
                        },
                        indicators: {
                            downloadSpeed: 12,
                            uploadSpeed: 35,
                            ping: 1
                        },
                        geoData: '1',
                        loading: false
                    },
                    {
                        name: {
                            title: 'Имя пользователя',
                            text: 'название локации'
                        },
                        indicators: {
                            downloadSpeed: 12,
                            uploadSpeed: 35,
                            ping: 1
                        },
                        geoData: '1',
                        loading: false
                    }
                ]}/>
            </div>
        </HistoryWrapper>
    )
}

export default History
