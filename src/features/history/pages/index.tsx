import { type FC } from 'react'
import { HistoryWrapper } from './History.styled.tsx'
import { Header } from '@/features/kit'
import { useGetAllHistoryQuery } from '../api/history.api.ts'
import List from '../components/List'

const History: FC = () => {
    const { data: allHistory, isFetching } = useGetAllHistoryQuery(null)

    return (
        <HistoryWrapper>
            <Header subheading='Геоданные и измерения' />
            {allHistory && <div className='history'>
                <List isFetching={isFetching} data={allHistory.map((item) => ({
                    userName: item.user?.nick,
                    location: 'название локации',
                    time: item.createdAt,
                    indicators: {
                        downloadSpeed: item.downloadSpeed,
                        uploadSpeed: item.uploadSpeed
                    }
                }))}/>
            </div>}

        </HistoryWrapper>
    )
}

export default History
