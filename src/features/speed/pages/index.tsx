import { useState, useRef, type FC } from 'react'
import SpeedTest from '@cloudflare/speedtest'
import { SpeedStyledWrapper } from './Speed.styled.tsx'
import { Header, MainButton, SvgArrowDown, SvgArrowUp } from '@/features/kit'
import SpeedometerCanvas from '../components/SpeedometerCanvas.tsx'

const Speed: FC = () => {
    const [isTesting, setIsTesting] = useState<boolean>(false)
    const [check, setCheck] = useState<'download' | 'upload'>('download')
    const [downloadSpeed, setDownloadSpeed] = useState<number>(0)
    const [uploadSpeed, setUploadSpeed] = useState<number>(0)
    const intervalDownloadId = useRef<number | null>(null)
    const intervalUploadId = useRef<number | null>(null)

    const handleStart = (): void => {
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
        }, 10000)

        setTimeout(() => {
            handleFinish()
        }, 20000)
    }

    const handleFinish = (): void => {
        if (intervalDownloadId.current) {
            clearInterval(intervalDownloadId.current)
        }
        if (intervalUploadId.current) {
            clearInterval(intervalUploadId.current)
        }

        setDownloadSpeed(0)
        setUploadSpeed(0)
        setIsTesting(false)
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
                        <div className='num'>{downloadSpeed}</div>
                    </div>
                </div>
                <div className='column'>
                    <SvgArrowUp />
                    <div className='text'>
                        <h3 className='title'>
                          Отдача <span>Мбит/с</span>
                        </h3>
                        <div className='num'>{uploadSpeed}</div>
                    </div>
                </div>
            </div>
            <div className='speed'>
                {/* <Counter jitter={jitter} ping={ping} /> */}
            </div>
            <div className='speedometer'>
                <SpeedometerCanvas value={check === 'download' ? downloadSpeed : uploadSpeed} check={check} isTesting={isTesting} />
            </div>
            {isTesting
                ? <MainButton className='btn_wrapper' onClick={handleFinish}>Остановить</MainButton>
                : <MainButton className='btn_wrapper' onClick={handleStart}>Начать</MainButton>
            }
        </SpeedStyledWrapper>
    )
}

export default Speed
