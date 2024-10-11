import { type FC } from 'react'
import { Avatar, List as AntdList, Skeleton } from 'antd'
import { SvgArrowDown, SvgArrowUp } from '@/features/kit'
import { formatDate } from '@/utils'

interface DataType {
    coordinates: number[]
    indicators: {
        downloadSpeed: number
        uploadSpeed: number
    }
    time: string
    userName?: string
}

interface ListProps {
    data: DataType[]
    isFetching: boolean
}

const List: FC<ListProps> = ({ data, isFetching }) => {
    return (
        <AntdList
            itemLayout="horizontal"
            loading={false}
            dataSource={data}
            renderItem={(item) => (
                <AntdList.Item className='record'>
                    <Skeleton title={false} loading={isFetching}>
                        <AntdList.Item.Meta
                            avatar={<Avatar size='large' src='../../../../../public/avaProfileWhite.svg' />}
                            title={item.userName ?? 'Аноним'}
                            description={`${item.coordinates[0]} ${item.coordinates[1]}`}
                        />
                        <div className='block_result'>
                            <div className='results'>
                                <div>
                                    <span><SvgArrowDown/> Загрузка</span>
                                    <div className='info'>
                                        {item.indicators.downloadSpeed}
                                        <span id='Mb'> Мбит/с</span>
                                    </div>
                                </div>
                                <div>
                                    <span><SvgArrowUp/> Отдача</span>
                                    <div className='info'>
                                        {item.indicators.uploadSpeed}
                                        <span id='Mb'> Мбит/с</span>
                                    </div>
                                </div>
                            </div>
                            <div className='time'>
                                <span>{formatDate(item.time)}</span>
                            </div>
                        </div>
                    </Skeleton>
                </AntdList.Item>
            )}
        />
    )
}

export default List
