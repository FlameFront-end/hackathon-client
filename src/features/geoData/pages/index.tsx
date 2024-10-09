import { type FC } from 'react'
import Index from '../../kit/components/Header'
import MainButton from '../../kit/components/Buttons/MainButton/MainButton.tsx'
import { GeoDataStyledWrapper } from './GeoData.styled.tsx'

const GeoData: FC = () => {
    return (
        <GeoDataStyledWrapper>
            <Index subheading='Геоданные и измерения' />
            <div className='geodata'>
                <h2 className='heading'>
                    GeoData <span>RFC 5870</span>
                </h2>
                <a
                    href='geo:54.8143,36.2911?z=14'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='coords'
                >
                    geo:54.8143,36.2911?z=14
                </a>
                <div className='card_block'>
                    <div className='card'>
                        {/* <SvgChartBar /> */}
                        <div className='text'>
                            Мощность <span>-77 Дб</span>
                        </div>
                    </div>
                    <div className='card'>
                        {/* <SvgArrowsUpDownOrange /> */}
                        <div className='text'>
                            Задержка <span>~3 ms</span>
                        </div>
                    </div>
                    <div className='card'>
                        {/* <SvgArrowsUpDownBlue /> */}
                        <div className='text'>
                            До вышки <span>100 м</span>
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
                        {/* <SvgDownload /> */}
                        Скачать архив
                    </MainButton>
                </div>

                <MainButton isMain color='#B462F5' onClick={() => { console.log('Обновить') }}>
                    {/* <SvgUpdate /> */}
                    Обновить
                </MainButton>
            </div>
        </GeoDataStyledWrapper>
    )
}

export default GeoData
