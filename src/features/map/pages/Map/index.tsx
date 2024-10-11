import { type FC, useEffect, useState } from 'react'
import { Header, MainButton, SvgArrowsUpDownBlue, SvgChartBar, SvgLocation } from '@/features/kit'
import { MapStyledWrapper } from '../Map.styled.tsx'
import { YMaps, Map as Ymap, Placemark, Circle } from '@pbe/react-yandex-maps'
import { useGeoLocation } from '@/hooks'
import { useGetAllHistoryQuery } from '../../../history/api/history.api.ts'
import InfoModal from '../../components/InfoModal'

import svg1 from '../../../../../public/person-mark.svg'
import svg2 from '../../../../../public/mark.svg'

const calculateDistance = (coords1: [number, number], coords2: [number, number]): number => {
    const toRad = (value: number): number => value * Math.PI / 180

    const lat1 = coords1[0]
    const lon1 = coords1[1]
    const lat2 = coords2[0]
    const lon2 = coords2[1]

    const R = 6371
    const dLat = toRad(lat2 - lat1)
    const dLon = toRad(lon2 - lon1)
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const distance = R * c // Расстояние в метрах

    return distance
}

const Map: FC = () => {
    const [userLocation, setUserLocation] = useState<[number, number] | null>(null)
    const [mapCenter, setMapCenter] = useState<[number, number]>([54.51, 36.26])
    const [zoom, setZoom] = useState<number>(13)
    const [closestPoint, setClosestPoint] = useState<{ coordinates: [number, number], distance: number } | null>(null)
    const [test, setTest] = useState(0)

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

    console.log('userLocation', userLocation)

    useEffect(() => {
        if (userLocation && uniqueHistory?.length) {
            let minDistance = Infinity
            let nearestPoint = null

            uniqueHistory.forEach((point) => {
                const distance = calculateDistance(userLocation, [point.coordinates[0], point.coordinates[1]])
                if (distance < minDistance) {
                    minDistance = distance
                    nearestPoint = { coordinates: point.coordinates, distance }
                    setTest(point.uploadSpeed)
                }
            })

            setClosestPoint(nearestPoint)
        }
    }, [userLocation, uniqueHistory?.length])

    const getCircleColor = (downloadSpeed: number, uploadSpeed: number): string => {
        const speed = Math.min(downloadSpeed, uploadSpeed)

        if (speed < 5) return '#000000'
        if (speed >= 5 && speed < 20) return '#FF0000'
        if (speed >= 20 && speed < 50) return '#FFFF00'
        return '#00FF00'
    }

    return (
        <MapStyledWrapper style={{ position: 'relative' }}>
            <InfoModal />
            <Header subheading="Карта качества связи"/>
            <div className='top'>
                <div className='column'>
                    <SvgChartBar/>
                    <div className='text'>
                        <h3 className='title'>
                            {test ? <span>Мощность <span>{test} Мбит/с</span></span> : <span>N/A</span>}
                        </h3>
                    </div>
                </div>
                <div className='column'>
                    <SvgArrowsUpDownBlue/>
                    <div className='text'>
                        <h3 className='title'>
                          До близжайшей точки <span>{closestPoint ? `${(closestPoint.distance * 1000).toFixed(0)} м` : 'N/A'}</span>
                        </h3>
                    </div>
                </div>
            </div>
            <YMaps query={{ apikey: 'ee55b2db-9099-4f9f-bf10-d10079ebcb34' }}>
                <Ymap className='ymap' state={{ center: mapCenter, zoom }}>
                    {userLocation && <Placemark
                        geometry={userLocation}
                        options={{
                            balloonCloseButton: true,
                            hideIconOnBalloonOpen: false,
                            iconImageHref: svg1,
                            iconLayout: 'default#image',
                            iconImageSize: [30, 42],
                            iconImageOffset: [-3, -42]
                        }}
                    />}

                    {uniqueHistory?.map((item, index) => (
                        <Placemark
                            key={index}
                            geometry={item.coordinates}
                            properties={{
                                balloonContent: `
                                    <div>
                                        <strong>Загрузка:</strong> ${item.downloadSpeed} Мбит/с<br/>
                                        <strong>Отдача:</strong> ${item.uploadSpeed} Мбит/с<br/>
                                    </div>
                                `
                            }}
                            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                            options={{
                                balloonCloseButton: true,
                                hideIconOnBalloonOpen: false,
                                iconImageHref: svg2,
                                iconLayout: 'default#image',
                                iconImageSize: [30, 42],
                                iconImageOffset: [-3, -42]
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
