import { type FC, useEffect, useState } from 'react'
import { Avatar, List, Skeleton } from 'antd'
import { SvgArrowDown, SvgArrowUp } from '@/features/kit'

interface DataType {
    name: {
        title: string
        text: string
    }
    indicators: {
        downloadSpeed: number
        uploadSpeed: number
        ping: number
    }
    geoData?: string
    time?: string
    large?: string
    loading: boolean
}

interface ListProps {
    data: DataType[]
}

const App: FC<ListProps> = ({ data }) => {
    const [initLoading, setInitLoading] = useState(true)
    const [list, setList] = useState<DataType[]>([])

    useEffect(() => {
        setInitLoading(false)
        setList(data)
    }, [])
    return (
        <List
            className="demo-loadmore-list"
            loading={initLoading}
            itemLayout="horizontal"
            dataSource={list}
            renderItem={(item) => (
                <List.Item>
                    <Skeleton title={false} loading={item.loading} active>
                        <List.Item.Meta
                            avatar={<Avatar src='../../../../../public/ava.png' />}
                            title={item.name?.title}
                            description={
                                item.name?.text
                            }
                        />
                        <div>
                            <div className='results'>
                                <div>
                                    <span>
                                        <SvgArrowDown/> {' Загрузка '}
                                    </span>
                                    { String(item.indicators.downloadSpeed) }
                                </div>
                                <div>
                                    <span>
                                        <SvgArrowUp/> {' Отдача '}
                                    </span>
                                    { (item.indicators.uploadSpeed) }
                                </div>
                            </div>
                            <div className='time'>
                                <span>время: {item.time}</span>
                            </div>
                        </div>
                    </Skeleton>
                </List.Item>
            )}
        />
    )
}

export default App
