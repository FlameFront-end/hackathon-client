import { type FC, useState } from 'react'
import { HistoryWrapper } from './History.styled.tsx'
import { Header, PinkButton } from '@/features/kit'
import { useGetAllHistoryQuery, useGetHistoryByUserIdQuery } from '../api/history.api.ts'
import List from '../components/List'
import { useAppSelector } from '@/hooks'
import { BeatLoader } from 'react-spinners'

const History: FC = () => {
    const userId = useAppSelector(state => state.auth.user.id)

    const { data: allHistory, isFetching } = useGetAllHistoryQuery(null)
    const { data: myHistory, isFetching: isFetchingMyHistory } = useGetHistoryByUserIdQuery(userId ?? 0)

    const [showAll, setShowAll] = useState<boolean>(true)

    return (
        <HistoryWrapper>
            <Header subheading='Геоданные и измерения' />
            {userId ? <PinkButton className='show' onClick={() => { setShowAll((prevState) => !prevState) }}>
                {showAll ? 'Показать мою историю' : 'Показать историю всех пользователь'}
            </PinkButton> : null}

            {showAll ? <>{!isFetching ? <>
                {allHistory && <div className='history'>
                    <List isFetching={isFetching} data={allHistory.map((item) => ({
                        userName: item.user?.nick,
                        coordinates: item.coordinates,
                        time: item.createdAt,
                        indicators: {
                            downloadSpeed: item.downloadSpeed,
                            uploadSpeed: item.uploadSpeed
                        }
                    }))}/>
                </div>}
            </> : <div className='loader'>
                <BeatLoader size='20px' color="#ffffff"/>
            </div>}</>
                : <> {!isFetchingMyHistory ? <>
                    {myHistory && <div className="history">
                        <List isFetching={isFetchingMyHistory} data={myHistory.map((item) => ({
                            userName: item.user?.nick,
                            coordinates: item.coordinates,
                            time: item.createdAt,
                            indicators: {
                                downloadSpeed: item.downloadSpeed,
                                uploadSpeed: item.uploadSpeed
                            }
                        }))}/>
                    </div>}
                </> : <div className="loader">
                    <BeatLoader size="20px" color="#ffffff"/>
                </div>}
                </>}
        </HistoryWrapper>
    )
}

export default History
