import { type FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Result, Button } from 'antd'
import Flex from '../../features/kit/components/Flex'

const NotFound404: FC = () => {
    const navigate = useNavigate()

    const goBack = (): void => {
        navigate(-1)
    }

    return (
        <Flex alignItems={'center'} justifyContent={'center'} style={{ width: '100vw', height: '100vh' }}>
            <Result
                status='404'
                title='404'
                subTitle='К сожалению, страница, которую вы посетили, не существует.'
                extra={<Button type='primary' onClick={goBack}>Вернуться обратно</Button>}
            />
        </Flex>
    )
}

export default NotFound404
