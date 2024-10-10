import { type FC, useEffect, useState } from 'react'
import { Header, MainButton, SvgArrowsUpDownBlue, SvgChartBar, SvgLocation } from '@/features/kit'
import { MapStyledWrapper } from '../Map.styled.tsx'
import { YMaps, Map as Ymap, Placemark } from '@pbe/react-yandex-maps'
import fakeData from '../../data/data.ts'
import useGeoLocation from '../../../../hooks/useGeoLocation.ts'

const Map: FC = () => {
    const [userLocation, setUserLocation] = useState<[number, number] | null>(null)
    const [mapCenter, setMapCenter] = useState<[number, number]>([54.51, 36.26]) // Default to Kaluga
    const [zoom, setZoom] = useState<number>(13)

    const location = useGeoLocation()

    useEffect(() => {
    // Update user location if coordinates are available
        if (location.coordinates.lng && location.coordinates.lat) {
            const newLocation: [number, number] = [location.coordinates.lat, location.coordinates.lng]
            setUserLocation(newLocation)
            setMapCenter(newLocation) // Set the map center to user location
        }
    }, [location])

    const getMyLocation = (): void => {
    // Move the map to user location
        if (userLocation) {
            setMapCenter(userLocation)
            setZoom(15) // Optionally adjust zoom level
        }
    }

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
            <YMaps>
                <Ymap className='ymap' state={{ center: mapCenter, zoom }}> {/* Use state prop instead of defaultState */}
                    {userLocation && <Placemark geometry={userLocation} />}

                    {fakeData.map((item, index) => (
                        <Placemark
                            key={index}
                            geometry={item.coordinates}
                            properties={{
                                balloonContent: `
                                    <div>
                                        <strong>Download:</strong> ${item.downloadSpeed} Mbps<br/>
                                        <strong>Upload:</strong> ${item.uploadSpeed} Mbps<br/>
                                        <strong>Ping:</strong> ${item.ping} ms
                                    </div>
                                `
                            }}
                            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                            options={{
                                balloonCloseButton: true,
                                hideIconOnBalloonOpen: false
                            }}
                        />
                    ))}
                </Ymap>
            </YMaps>
            {userLocation !== null && (
                <MainButton onClick={getMyLocation} isMain color="#279AED">
                    <SvgLocation />
          Где я?
                </MainButton>
            )}
        </MapStyledWrapper>
    )
}

export default Map
