import { type FC, useEffect, useState } from 'react'
import { List, Skeleton } from 'antd'

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
    loading: boolean
}

interface ListProps {
    data: []
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
                <List.Item
                    actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
                >
                    <Skeleton title={false} loading={item.loading} active>
                        <List.Item.Meta
                            title={item.name?.title}
                            description={
                                item.name?.text +
                                ' downloadSpeed ' +
                                item.indicators.downloadSpeed +
                                ' uploadSpeed ' +
                                item.indicators.uploadSpeed
                            }
                        />
                        <div>content</div>
                    </Skeleton>
                </List.Item>
            )}
        />
    )
}

export default App
