import { useState, useRef, type FC, useEffect } from 'react'
import SpeedTest from '@cloudflare/speedtest'
import { SpeedStyledWrapper } from './Speed.styled.tsx'
import { Header, PinkButton, SvgArrowDown, SvgArrowUp } from '@/features/kit'
import SpeedometerCanvas from '../components/SpeedometerCanvas.tsx'
import { Button, Modal } from 'antd'
import {
    useCreateHistoryMutation,
    useGetAllHistoryQuery,
    useGetHistoryByUserIdQuery
} from '../../history/api/history.api.ts'
import { toast } from 'react-toastify'
import { useAppSelector, useGeoLocation } from '@/hooks'

const Speed: FC = () => {
    const [isTesting, setIsTesting] = useState<boolean>(false)
    const [check, setCheck] = useState<'download' | 'upload'>('download')
    const [downloadSpeed, setDownloadSpeed] = useState<number>(0)
    const [uploadSpeed, setUploadSpeed] = useState<number>(0)
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

    const intervalDownloadId = useRef<number | null>(null)
    const intervalUploadId = useRef<number | null>(null)

    const [coordinates, setCoordinates] = useState<[number, number]>([0, 0])

    const [createHistory] = useCreateHistoryMutation()
    const userId = useAppSelector(state => state.auth.user.id)
    const location = useGeoLocation()

    const { refetch: refetchAll } = useGetAllHistoryQuery(null)
    const { refetch: refetchMy } = useGetHistoryByUserIdQuery(userId ?? 0)

    useEffect(() => {
        if (location.coordinates.lng && location.coordinates.lat) {
            setCoordinates([location.coordinates.lat, location.coordinates.lng])
        }
    }, [location])

    const handleStart = async (): Promise<void> => {
        setIsTesting(true)
        const speedTest = new SpeedTest()

        intervalDownloadId.current = window.setInterval(() => {
            const downloadSpeedMbps = Math.round(speedTest?.results?.getDownloadBandwidth() as number / 1e6)
            setDownloadSpeed(downloadSpeedMbps)
        })

        setTimeout(() => {
            setCheck('upload')
            intervalUploadId.current = window.setInterval(() => {
                const uploadSpeedMbps = Math.round(speedTest?.results?.getUploadBandwidth() as number / 1e6)
                setUploadSpeed(uploadSpeedMbps)
            })
        }, 20000)

        setTimeout(() => {
            const finalDownloadSpeed = Math.round(speedTest?.results?.getDownloadBandwidth() as number / 1e6)
            const finalUploadSpeed = Math.round(speedTest?.results?.getUploadBandwidth() as number / 1e6)

            speedTest.pause()

            void createHistory({
                downloadSpeed: finalDownloadSpeed,
                uploadSpeed: finalUploadSpeed,
                coordinates,
                userId: userId ?? undefined
            }).then(() => {
                toast.success('История успешно сохранена')
                void refetchAll()
                void refetchMy()
            })

            void handleFinish()
        }, 40000)
    }

    const handleFinish = async (): Promise<void> => {
        if (intervalDownloadId.current) {
            clearInterval(intervalDownloadId.current)
        }
        if (intervalUploadId.current) {
            clearInterval(intervalUploadId.current)
        }

        setIsTesting(false)
        setIsModalVisible(true)
    }

    const handleModalOk = (): void => {
        setIsModalVisible(false)
        setDownloadSpeed(0)
        setUploadSpeed(0)
    }

    return (
        <SpeedStyledWrapper>
            <Header subheading="Измерение скорости" />
            <div className='top'>
                <div className='column'>
                    <SvgArrowDown />
                    <div className='text'>
                        <h3 className='title'>
                          Загрузка <span>Мбит/с</span>
                        </h3>
                        <div className='num'>{!Number.isNaN(downloadSpeed) ? downloadSpeed : 0}</div>
                    </div>
                </div>
                <div className='column'>
                    <SvgArrowUp />
                    <div className='text'>
                        <h3 className='title'>
                          Отдача <span>Мбит/с</span>
                        </h3>
                        <div className='num'>{!Number.isNaN(uploadSpeed) ? uploadSpeed : 0}</div>
                    </div>
                </div>
            </div>
            <div className='speedometer'>
                <SpeedometerCanvas value={check === 'download' ? downloadSpeed : uploadSpeed} check={check} isTesting={isTesting} />
            </div>
            {isTesting
                ? <PinkButton className='btn_wrapper' onClick={handleFinish}>Остановить</PinkButton>
                : <PinkButton className='btn_wrapper' onClick={handleStart}>Начать</PinkButton>
            }

            <Modal
                title="Результаты теста скорости"
                open={isModalVisible}
                onCancel={handleModalOk}
                footer={<Button onClick={handleModalOk}>Закрыть</Button>}
            >
                <p>Скорость загрузки: {downloadSpeed} Мбит/с</p>
                <p>Скорость отдачи: {uploadSpeed} Мбит/с</p>
            </Modal>
        </SpeedStyledWrapper>
    )
}

export default Speed
