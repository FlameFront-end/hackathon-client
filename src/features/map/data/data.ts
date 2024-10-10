interface FakeDataItem {
    coordinates: [number, number]
    downloadSpeed: number
    uploadSpeed: number
    ping: number
}

const generateFakeData = (numPoints: number): FakeDataItem[] => {
    const fakeData: FakeDataItem[] = []

    for (let i = 0; i < numPoints; i++) {
        const latitude = (Math.random() * (55.0 - 54.3) + 54.3).toFixed(6)
        const longitude = (Math.random() * (37.0 - 35.5) + 35.5).toFixed(6)

        const downloadSpeed = Math.floor(Math.random() * 100) + 1
        const uploadSpeed = Math.floor(Math.random() * 50) + 1
        const ping = Math.floor(Math.random() * 100)

        fakeData.push({
            coordinates: [parseFloat(latitude), parseFloat(longitude)],
            downloadSpeed,
            uploadSpeed,
            ping
        })
    }

    return fakeData
}

const fakeData = generateFakeData(10)

export default fakeData
