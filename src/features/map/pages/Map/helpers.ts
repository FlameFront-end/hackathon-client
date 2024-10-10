import { type YMapLocation } from '@yandex/ymaps3-types/imperative/YMap'
import type * as YMaps from '@yandex/ymaps3-types'

export const features: YMaps.YMapFeatureProps[] = [
    {
        id: '1',
        style: {
            fillRule: 'nonzero',
            fill: 'var(--map-no-data-color)',
            fillOpacity: 0.6,
            stroke: [
                {
                    color: 'var(--map-no-data-color)',
                    width: 5
                }
            ]
        },
        geometry: {
            type: 'Polygon',
            coordinates: [
                [
                    [37.8, 55.8],
                    [37.8, 55.75],
                    [37.9, 55.75],
                    [37.9, 55.8]
                ]
            ]
        },
        properties: { hint: 'Polygon 1' }
    },
    {
        id: '2',
        style: {
            fillRule: 'nonzero',
            fill: 'var(--map-success-color)',
            fillOpacity: 0.6,
            stroke: [
                {
                    color: 'var(--map-success-color)',
                    width: 5
                }
            ]
        },
        geometry: {
            type: 'Polygon',
            coordinates: [
                [
                    [37.9, 55.8],
                    [37.9, 55.75],
                    [38.0, 55.75],
                    [38.0, 55.8]
                ]
            ]
        },
        properties: { hint: 'Polygon 2' }
    },
    {
        id: '3',
        style: {
            fillRule: 'nonzero',
            fill: 'var(--map-danger-color)',
            fillOpacity: 0.6,
            stroke: [
                {
                    color: 'var(--map-danger-color)',
                    width: 5
                }
            ]
        },
        geometry: {
            type: 'Polygon',
            coordinates: [
                [
                    [38.0, 55.8],
                    [38.0, 55.75],
                    [38.1, 55.75],
                    [38.1, 55.8]
                ]
            ]
        },
        properties: { hint: 'Polygon 3' }
    }
]

export const location: YMapLocation = { center: [37.95, 55.65], zoom: 10 }
export const apiKey = 'ee55b2db-9099-4f9f-bf10-d10079ebcb34'
