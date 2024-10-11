import { type FC, useEffect, useState } from 'react'
import { Header, MainButton, SvgArrowsUpDownBlue, SvgChartBar, SvgLocation } from '@/features/kit'
import { MapStyledWrapper } from '../Map.styled.tsx'
import { YMaps, Map as Ymap, Placemark, Circle } from '@pbe/react-yandex-maps'
import { useGeoLocation } from '@/hooks'
import { useGetAllHistoryQuery } from '../../../history/api/history.api.ts'

const Map: FC = () => {
    const [userLocation, setUserLocation] = useState<[number, number] | null>(null)
    const [mapCenter, setMapCenter] = useState<[number, number]>([54.51, 36.26])
    const [zoom, setZoom] = useState<number>(13)

    const { data: allHistory } = useGetAllHistoryQuery(null)
    const location = useGeoLocation()

    useEffect(() => {
        if (location.coordinates.lng && location.coordinates.lat) {
            const newLocation: [number, number] = [location.coordinates.lat, location.coordinates.lng]
            setUserLocation(newLocation)
            setMapCenter(newLocation)
        }
    }, [location])

    const getMyLocation = (): void => {
        if (userLocation) {
            setMapCenter(userLocation)
            setZoom(15)
        }
    }

    const uniqueHistory = allHistory?.filter((item, index, self) =>
        index === self.findIndex(t => (
            t.coordinates[0] === item.coordinates[0] && t.coordinates[1] === item.coordinates[1]
        ))
    )

    // Чёрный (очень низкий) — скорость меньше 5 Мбит/с.
    // Красный (низкий) — скорость от 5 до 20 Мбит/с.
    // Жёлтый (средний) — скорость от 20 до 50 Мбит/с.
    // Зелёный (отличный) — скорость больше 50 Мбит/с.

    const getCircleColor = (downloadSpeed: number, uploadSpeed: number): string => {
        const speed = Math.min(downloadSpeed, uploadSpeed)

        if (speed < 5) return '#000000' // чёрный
        if (speed >= 5 && speed < 20) return '#FF0000' // красный
        if (speed >= 20 && speed < 50) return '#FFFF00' // жёлтый
        return '#00FF00' // зелёный
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
            <YMaps query={{ apikey: 'ee55b2db-9099-4f9f-bf10-d10079ebcb34' }} >
                <Ymap className='ymap' state={{ center: mapCenter, zoom }}>
                    {userLocation && <Placemark geometry={userLocation} />}

                    {allHistory?.map((item, index) => (
                        <Placemark
                            key={index}
                            geometry={item.coordinates}
                            properties={{
                                balloonContent: `
                                    <div>
                                        <strong>Download:</strong> ${item.downloadSpeed} Mbps<br/>
                                        <strong>Upload:</strong> ${item.uploadSpeed} Mbps<br/>
                                    </div>
                                `
                            }}
                            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                            options={{
                                balloonCloseButton: true,
                                hideIconOnBalloonOpen: false
                                // iconLayout: 'default#image',
                                // iconImageSize: [30, 42],
                                // iconImageOffset: [-3, -42]
                            }}
                        />
                    ))}

                    {uniqueHistory?.map((item, index) => (
                        <Circle
                            key={index}
                            geometry={[item.coordinates, 1000]}
                            options={{
                                fillColor: `${getCircleColor(item.downloadSpeed, item.uploadSpeed)}77`,
                                strokeColor: getCircleColor(item.downloadSpeed, item.uploadSpeed),
                                strokeOpacity: 0.8,
                                strokeWidth: 3
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
