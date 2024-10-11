import { useState, useEffect } from 'react'

interface Coordinates {
    lat: number | null
    lng: number | null
}

interface Location {
    loaded: boolean
    coordinates: Coordinates
    error?: {
        code: number
        message: string
    }
}

const useGeoLocation = (): Location => {
    const [location, setLocation] = useState<Location>({
        loaded: false,
        coordinates: { lat: null, lng: null }
    })

    const onSuccess = (position: GeolocationPosition): void => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
        })
    }

    const onError = (error: GeolocationPositionError): void => {
        setLocation({
            loaded: true,
            coordinates: { lat: null, lng: null },
            error: {
                code: error.code,
                message: error.message
            }
        })
    }

    useEffect(() => {
        if (!('geolocation' in navigator)) {
            onError({
                code: 0,
                message: 'Geolocation not supported'
            } as GeolocationPositionError)
            return
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }, [])

    return location
}

export default useGeoLocation
