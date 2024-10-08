import { type FC } from 'react'
import { Tabs as TabsAntd, type TabsProps as TabsPropsAntd } from 'antd'

interface TabsProps extends TabsPropsAntd {
    tabs: string[]
    setCurrentTab: (currentTab: string) => void
}
const Tabs: FC<TabsProps> = ({ tabs, setCurrentTab, ...props }) => {
    const items = tabs?.map((label, index) => ({ key: `${index}`, label }))

    return (
        <TabsAntd
            defaultActiveKey={'0'}
            items={items}
            onChange={(tabIndex) => {
                setCurrentTab(items[Number(tabIndex)].label)
            }}
            {...props}
        />
    )
}

export default Tabs
