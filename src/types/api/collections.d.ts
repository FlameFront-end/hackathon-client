declare namespace Collections {
    interface User {
        id: number
        nick: string
        name: string
        email: string
        password: string
        updatedAt: string
        createdAt: string
        histories: Collections.History[]
    }

    interface History {
        id: number
        downloadSpeed: number
        uploadSpeed: number
        coordinates: number[]
        createdAt: string
        user?: Collections.User
    }

    interface CreateHistoryPayload {
        downloadSpeed: number
        uploadSpeed: number
        coordinates: number[]
        userId?: number
    }
}
