import { type FC, useEffect, useRef, useState } from 'react'
import * as maptilersdk from '@maptiler/sdk'
import { MapStyledWrapper } from './Map.styled.tsx'
import Header from '../../kit/components/header/Header.tsx'
import MainButton from '../../kit/components/Buttons/MainButton/MainButton.tsx'

import '@maptiler/sdk/dist/maptiler-sdk.css'

const Map: FC = () => {
    const mapContainer = useRef<HTMLDivElement | null>(null)
    const [userLocation, setUserLocation] = useState<maptilersdk.LngLat>(
        new maptilersdk.LngLat(36.262724, 54.517791)
    )

    useEffect(() => {
        maptilersdk.config.apiKey = 'U5L9BK8UnH7C2pZKrTlG'

        const map = new maptilersdk.Map({
            container: mapContainer.current as HTMLElement,
            style: 'streets-v2-dark',
            center: [36.2754, 54.5293],
            zoom: 10
        })

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const location = new maptilersdk.LngLat(
                    position.coords.longitude,
                    position.coords.latitude
                )
                setUserLocation(location)
                new maptilersdk.Marker().setLngLat(location).addTo(map)
            })
        }

        new maptilersdk.Marker().setLngLat(userLocation).addTo(map)
    }, [userLocation])

    const handleButtonClick = (): void => {
        const geoButton = document.querySelector(
            '#map > div.maplibregl-control-container > div.maplibregl-ctrl-top-right > div:nth-child(2) > button > span'
        )
        const buttonElement = geoButton as HTMLButtonElement
        if (buttonElement) buttonElement.click()
    }

    return (
        <MapStyledWrapper>
            <div id="map" className='map' ref={mapContainer}></div>
            <Header subheading="Карта качества связи" />
            <div className='top'>
                <div className='column'>
                    {/* <SvgChartBar /> */}
                    <div className='text'>
                        <h3 className='title'>
							Мощность <span>-77 Дб</span>
                        </h3>
                    </div>
                </div>
                <div className='column'>
                    {/* <SvgArrowsUpDownBlue /> */}
                    <div className='text'>
                        <h3 className='title'>
							До вышки <span>100 м</span>
                        </h3>
                    </div>
                </div>
            </div>
            <MainButton onClick={handleButtonClick} isMain color="#279AED">
                {/* <SvgLocation /> */}
				Где я?
            </MainButton>
        </MapStyledWrapper>
    )
}

export default Map
