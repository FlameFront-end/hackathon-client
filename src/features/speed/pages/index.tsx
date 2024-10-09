import { useState, useCallback, type FC, type CSSProperties } from 'react'
import SpeedTest from '@cloudflare/speedtest'
import { SpeedStyledWrapper } from './Speed.styled.tsx'
import Index from '../../kit/components/Header'
import Counter from '../../kit/components/Counter/Counter.tsx'
import MainButton from '../../kit/components/Buttons/MainButton/MainButton.tsx'

const Speed: FC = () => {
    const [mainButtonName, setMainButtonName] = useState('Начать')
    const [downloadSpeed, setDownloadSpeed] = useState(0)
    const [uploadSpeed, setUploadSpeed] = useState(0)
    const [downloadSpeedOld, setDownloadSpeedOld] = useState(0)
    const [uploadSpeedOld, setUploadSpeedOld] = useState(0)
    const [ping, setPing] = useState(0)
    const [jitter, setJitter] = useState(0)

    const range = (
        value: number,
        low1: number,
        high1: number,
        low2: number,
        high2: number
    ): number => {
        return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1)
    }

    const lerp = useCallback((start: number, end: number, time: number): number => {
        return start + time * (end - start)
    }, [])

    const mainButtonFunc = useCallback(() => {
        setMainButtonName('Остановить')
        const speedTest = new SpeedTest()

        const intervalId = setInterval(() => {
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
                    (lerp(downloadSpeedOld, Math.round(cfDn / 100000) / 10, 0.01)) * 100
                ) / 100
                setDownloadSpeed(newDownloadSpeed)
                setDownloadSpeedOld(newDownloadSpeed)
            }

            if (cfUp) {
                const newUploadSpeed = Math.round(
                    (lerp(uploadSpeedOld, Math.round(cfUp / 100000) / 10, 0.01)) * 100
                ) / 100
                setUploadSpeed(newUploadSpeed)
                setUploadSpeedOld(newUploadSpeed)
            }
        }, 22)

        return () => { clearInterval(intervalId) }
    }, [downloadSpeedOld, uploadSpeedOld, lerp])

    return (
        <SpeedStyledWrapper>
            <Index subheading="Измерение скорости" />
            <div className='top'>
                <div className='column'>
                    {/* <SvgArrowDown /> */}
                    <div className='text'>
                        <h3 className='title'>
                            Загрузка <span>Мбит/с</span>
                        </h3>
                        <div className='num'>{downloadSpeed}</div>
                    </div>
                </div>
                <div className='column'>
                    {/* <SvgArrowUp /> */}
                    <div className='text'>
                        <h3 className='title'>
                            Отдача <span>Мбит/с</span>
                        </h3>
                        <div className='num'>{uploadSpeed}</div>
                    </div>
                </div>
            </div>
            <div className='speed'>
                <Counter jitter={jitter} ping={ping} />
            </div>
            <div className='speedometer'>
                <div
                    className='gauge'
                    style={{
                        '--ang': `${range(
                            (uploadSpeed === 0 && downloadSpeed) || uploadSpeed,
                            0,
                            100,
                            0,
                            270
                        )}deg`
                    } as CSSProperties}
                >
                    <div className='circle'>
                        <div className='num'>
                            {(uploadSpeed === 0 && downloadSpeed) || uploadSpeed}
                        </div>
                        <div className='name'>
                            {(uploadSpeed === 0 && 'Загрузка') || 'Отдача'}
                        </div>
                    </div>
                </div>

            </div>
            <MainButton isMain color="#545454" onClick={mainButtonFunc}>
                {mainButtonName}
            </MainButton>
        </SpeedStyledWrapper>
    )
}

export default Speed
