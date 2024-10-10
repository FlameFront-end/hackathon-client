import { type FC, useEffect, useRef, useState } from 'react'
import { Header, MainButton, SvgArrowsUpDownBlue, SvgChartBar, SvgLocation } from '@/features/kit'
import maplibregl, { type Map as MapLibreMap } from 'maplibre-gl'
import { MapStyledWrapper } from './Map.styled.tsx'
import useGeoLocation from '../../../hooks/useGeoLocation.ts'

import 'maplibre-gl/dist/maplibre-gl.css'
import fakeData from '../data/data.ts'

const Map: FC = () => {
    const API_KEY = 'yqVm8spL8ehikMLKrXJI'

    const mapContainer = useRef<HTMLDivElement | null>(null)
    const map = useRef<MapLibreMap | null>(null)
    const [userLocation, setUserLocation] = useState<[number, number] | null>(null)
    const [zoom] = useState<number>(10)

    const location = useGeoLocation()

    useEffect(() => {
        if (location.coordinates.lng && location.coordinates.lat) {
            setUserLocation([location.coordinates.lng, location.coordinates.lat])
        }
    }, [location])

    useEffect(() => {
        if (map.current ?? mapContainer.current === null) return

        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/basic-v2-dark/style.json?key=${API_KEY}`,
            center: [54.5149, 36.2634],
            zoom
        })
    }, [API_KEY, zoom])

    useEffect(() => {
        if (map.current && userLocation) {
            map.current.setCenter(userLocation)
            new maplibregl.Marker().setLngLat(userLocation).addTo(map.current)
        }
    }, [map.current, userLocation])

    const handleButtonClick = (): void => {
        if (userLocation) {
            map.current?.setCenter(userLocation)
            map.current?.setZoom(15)
        }
    }

    useEffect(() => {
        fakeData.forEach((item) => {
            if (map.current) {
                new maplibregl.Marker().setLngLat(item.coordinates).addTo(map.current)
            }
        })
    }, [fakeData])

    return (
        <MapStyledWrapper>
            <Header subheading="Карта качества связи"/>
            <div className='top'>
                <div className='column'>
                    <SvgChartBar/>
                    <div className='text'>
                        <h3 className='title'>
                          Мощность <span>-77 Дб</span>
                        </h3>
                    </div>
                </div>
                <div className='column'>
                    <SvgArrowsUpDownBlue/>
                    <div className='text'>
                        <h3 className='title'>
                          До вышки <span>100 м</span>
                        </h3>
                    </div>
                </div>
            </div>
            <div>
                <button id="toggle-button">Hide</button>
                <div
                    ref={mapContainer}
                    style={{
                        width: '100%',
                        height: '80vh'
                    }}
                />
            </div>
            <MainButton onClick={handleButtonClick} isMain color="#279AED">
                <SvgLocation />
              Где я?
            </MainButton>
        </MapStyledWrapper>
    )
}

export default Map
