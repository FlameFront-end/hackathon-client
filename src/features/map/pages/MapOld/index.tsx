import { type FC, useEffect, useRef, useState } from 'react'
import { Header, MainButton, SvgArrowsUpDownBlue, SvgChartBar, SvgLocation } from '@/features/kit'
import maplibregl, { type Map as MapLibreMap } from 'maplibre-gl'

import 'maplibre-gl/dist/maplibre-gl.css'
import useGeoLocation from '../../../../hooks/useGeoLocation.ts'
import fakeData from '../../data/data.ts'
import { MapStyledWrapper } from '../Map.styled.tsx'

const MapOld: FC = () => {
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
        if (!map.current && mapContainer.current) {
            map.current = new maplibregl.Map({
                container: mapContainer.current,
                style: `https://api.maptiler.com/maps/basic-v2-dark/style.json?key=${API_KEY}`,
                center: [54.5149, 36.2634],
                zoom
            })
        }
    }, [API_KEY, zoom])

    useEffect(() => {
        if (map.current && userLocation) {
            map.current.setCenter(userLocation)
            new maplibregl.Marker().setLngLat(userLocation).addTo(map.current)
        }
    }, [userLocation])

    const handleButtonClick = (): void => {
        if (userLocation && map.current) {
            map.current.setCenter(userLocation)
            map.current.setZoom(15)
        }
    }

    useEffect(() => {
        if (map.current) {
            fakeData.forEach((item) => {
                const el = document.createElement('div')
                el.className = 'custom-marker'
                el.style.backgroundColor = 'red'
                el.style.width = '30px'
                el.style.height = '30px'
                el.style.borderRadius = '50%'
                el.style.cursor = 'pointer' // Ensure marker is clickable

                // Create marker for each item
                const marker = new maplibregl.Marker(el)
                    .setLngLat(item.coordinates)
                    .addTo(map.current)

                // Add click event to open popup
                marker.getElement().addEventListener('click', () => {
                    new maplibregl.Popup()
                        .setLngLat(item.coordinates)
                        .setHTML('1111')
                        .addTo(map.current)
                })
            })
        }
    }, [fakeData])

    return (
        <MapStyledWrapper>
            <Header subheading="Карта качества связи" />
            <div className='top'>
                <div className='column'>
                    <SvgChartBar />
                    <div className='text'>
                        <h3 className='title'>
              Мощность <span>-77 Дб</span>
                        </h3>
                    </div>
                </div>
                <div className='column'>
                    <SvgArrowsUpDownBlue />
                    <div className='text'>
                        <h3 className='title'>
              До вышки <span>100 м</span>
                        </h3>
                    </div>
                </div>
            </div>
            <div>
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

export default MapOld
