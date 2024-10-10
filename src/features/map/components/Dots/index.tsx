// import { type FC, type MutableRefObject } from 'react'
// import type { Map as MapLibreMap } from 'maplibre-gl'
//
// interface Data {
//     coordinates: [number, number]
//     downloadSpeed: string
//     uploadSpeed: string
//     ping: string
//
// }
// interface DotsProps {
//     data: Data
//     map: MutableRefObject<MapLibreMap>
// }

// const Dots: FC<DotsProps> = ({ data, map }) => {
//
//     // let overlay: any
//     //
//     // const initializeOverlay = (): void => {
//     //     const layer = new deck.ScatterplotLayer({
//     //         id: 'scatterplot-layer',
//     //         data,
//     //         pickable: true,
//     //         opacity: 0.8,
//     //         stroked: true,
//     //         filled: true,
//     //         radiusScale: 6,
//     //         radiusMinPixels: 20,
//     //         radiusMaxPixels: 100,
//     //         lineWidthMinPixels: 5,
//     //         getPosition: (d) => d.geometry.coordinates,
//     //         getFillColor: (d) => [49, 130, 206],
//     //         getLineColor: (d) => [175, 0, 32],
//     //         onClick: (info: { coordinate: any, object: any }) => {
//     //             const { coordinate, object } = info
//     //             const description = `<div>
//     //         <p>
//     //           <strong>Name: </strong>${object.properties.name}
//     //         </p>
//     //           <strong>District: </strong>${object.properties.district}
//     //         </p>
//     //       </div>`
//     //             new maplibregl.Popup()
//     //                 .setLngLat(coordinate)
//     //                 .setHTML(description)
//     //                 .addTo(map)
//     //         }
//     //     })
//     //
//     //     // Create the overlay
//     //     overlay = new deck.MapboxOverlay({
//     //         layers: [layer]
//     //     })
//     //
//     //     map.addControl(overlay)
//     // }
//     //
//     // let show = true // Display the layer by default
//     //
//     // map.on('load', () => {
//     //     // Add the overlay
//     //     initializeOverlay()
//     //
//     //     const toggleButton = document.querySelector('#toggle-button')
//     //     toggleButton.addEventListener('click', () => {
//     //         if (show) {
//     //             map.removeControl(overlay)
//     //             toggleButton.innerText = 'Show'
//     //             show = false
//     //         } else {
//     //             initializeOverlay()
//     //             toggleButton.innerText = 'Hide'
//     //             show = true
//     //         }
//     //     })
//     // })
// }

// export default Dots
