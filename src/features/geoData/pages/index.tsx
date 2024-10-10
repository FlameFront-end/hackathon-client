import { type FC } from 'react'
import { GeoDataStyledWrapper } from './GeoData.styled.tsx'
import {
    Header, MainButton,
    SvgArrowsUpDownBlue, SvgArrowsUpDownOrange,
    SvgChartBar, SvgDownload, SvgUpdate
} from '@/features/kit'
import App from '../components/Tables/index.tsx'

interface GeoDataProps {
    geoData: string
    power: number
    ping: number
    distance: number
}

const GeoData: FC<GeoDataProps> = ({ geoData, power, ping, distance }) => {
    return (
        <GeoDataStyledWrapper>
            <Header subheading='Геоданные и измерения' />
            <div className='geodata'>
                <div className='infa'>
                    <h2 className='heading'>
                        GeoData <span>RFC 5870</span>
                    </h2>
                    <a
                        href={geoData}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='coords'
                    >
                        {geoData} geo:54.8143,36.2911?z=14
                    </a>
                    <div className='card_block'>
                        <div className='card'>
                            <SvgChartBar />
                            <div className='text'>
                                Мощность <span>-{power} 5 Дб</span>
                            </div>
                        </div>
                        <div className='card'>
                            <SvgArrowsUpDownOrange />
                            <div className='text'>
                                Задержка <span>~{ping} 5 ms</span>
                            </div>
                        </div>
                        <div className='card'>
                            <SvgArrowsUpDownBlue />
                            <div className='text'>
                                До вышки <span>{distance} 5 м</span>
                            </div>
                        </div>
                    </div>
                    <div className='bottom'>
                        <h2 className='heading'>
                            GeoAtl <span>CC0</span>
                        </h2>
                        <div className='scale'>
                            <h3>Масштаб</h3>
                            <div className='badge'>
                                <span className='left'>1:</span>
                                <span className='right'>21500</span>
                            </div>
                        </div>
                        <MainButton color='#786c5a' onClick={() => { console.log('Скачать архив') }}>
                            <SvgDownload />
                            Скачать архив
                        </MainButton>
                    </div>

                    <MainButton isMain color='#B462F5' onClick={() => { console.log('Обновить') }}>
                        <SvgUpdate />
                        Обновить
                    </MainButton>
                </div>
                <div className='bottom_App'>
                    <App data={[]}/>
                </div>
            </div>
        </GeoDataStyledWrapper>
    )
}

export default GeoData
