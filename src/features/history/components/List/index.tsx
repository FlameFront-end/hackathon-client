import { type FC } from 'react'
import { Avatar, List as AntdList, Skeleton } from 'antd'
import { SvgArrowDown, SvgArrowUp } from '@/features/kit'
import { formatDate } from '@/utils'

import avaWhite from '../../../../../public/avaWhite.svg'

interface DataType {
    location: string
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
            className="listHistory"
            itemLayout="horizontal"
            loading={false}
            dataSource={data}
            renderItem={(item) => (
                <AntdList.Item>
                    <Skeleton title={false} className='record' loading={isFetching}>
                        <AntdList.Item.Meta
                            avatar={<Avatar size='large' src={avaWhite} />}
                            title={item.userName}
                            description={item.location}
                        />
                        <div className='block_result'>
                            <div className='results'>
                                <div>
                                    <span><SvgArrowDown/> Загрузка</span>
                                    {item.indicators.downloadSpeed} Мбит/с
                                </div>
                                <div>
                                    <span><SvgArrowUp/> Отдача</span>
                                    {item.indicators.uploadSpeed} Мбит/с
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
