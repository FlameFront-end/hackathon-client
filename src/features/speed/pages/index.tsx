import { useState, useCallback, useRef, type FC } from 'react'
import SpeedTest from '@cloudflare/speedtest'
import { SpeedStyledWrapper } from './Speed.styled.tsx'
import { Counter, Header, MainButton, SvgArrowDown, SvgArrowUp } from '@/features/kit'
import SpeedometerCanvas from '../components/SpeedometerCanvas.tsx'

const Speed: FC = () => {
    const [mainButtonName, setMainButtonName] = useState('Начать')
    const [ping, setPing] = useState(0)
    const [jitter, setJitter] = useState(0)
    const downloadSpeed = useRef(0)
    const uploadSpeed = useRef(0)
    const downloadSpeedOld = useRef(0)
    const uploadSpeedOld = useRef(0)
    const intervalId = useRef<number | null>(null)

    // const range = (
    //     value: number,
    //     low1: number,
    //     high1: number,
    //     low2: number,
    //     high2: number
    // ): number => {
    //     return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1)
    // }

    const lerp = useCallback((start: number, end: number, time: number): number => {
        return start + time * (end - start)
    }, [])

    const mainButtonFunc = useCallback(() => {
        setMainButtonName('Остановить')
        const speedTest = new SpeedTest()

        if (intervalId.current) {
            clearInterval(intervalId.current)
        }

        intervalId.current = window.setInterval(() => {
            const cfJitt = speedTest.results.getUnloadedJitter()
            const cfPing = speedTest.results.getUnloadedLatency()
            const cfDn = speedTest.results.getDownloadBandwidth()
            const cfUp = speedTest.results.getUploadBandwidth()

            if (cfPing) {
                setPing(Math.round(cfPing * 10) / 10)
            }

            if (cfJitt) {
                setJitter(Math.round(cfJitt * 10) / 10)
            }

            if (cfDn) {
                const newDownloadSpeed = Math.round(
                    (lerp(downloadSpeedOld.current, Math.round(cfDn / 100000) / 10, 0.01)) * 100
                ) / 100
                downloadSpeed.current = newDownloadSpeed
                downloadSpeedOld.current = newDownloadSpeed
            }

            if (cfUp) {
                const newUploadSpeed = Math.round(
                    (lerp(uploadSpeedOld.current, Math.round(cfUp / 100000) / 10, 0.01)) * 100
                ) / 100
                uploadSpeed.current = newUploadSpeed
                uploadSpeedOld.current = newUploadSpeed
            }
        }, 1)

        return () => {
            if (intervalId.current) clearInterval(intervalId.current)
        }
    }, [lerp])

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
                        <div className='num'>{downloadSpeed.current}</div>
                    </div>
                </div>
                <div className='column'>
                    <SvgArrowUp />
                    <div className='text'>
                        <h3 className='title'>
                          Отдача <span>Мбит/с</span>
                        </h3>
                        <div className='num'>{uploadSpeed.current}</div>
                    </div>
                </div>
            </div>
            <div className='speed'>
                <Counter jitter={jitter} ping={ping} />
            </div>
            <div className='speedometer'>
                <SpeedometerCanvas value={uploadSpeed.current || downloadSpeed.current} />
            </div>
            <MainButton className='btn_wrapper' onClick={mainButtonFunc}>
                {mainButtonName}
            </MainButton>
        </SpeedStyledWrapper>
    )
}

export default Speed
