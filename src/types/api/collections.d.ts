declare namespace Collections {
    interface User {
        id: number
        patronymic: string | null
        surname: string
        name: string
        email: string
        ava: string | null
        isAdmin: boolean
        password: string
        birthdate: string
        shortInfo: string | null
        city: string | null
        mobilePhone: string | null
        additionalPhone: string | null
        skype: string | null
        site: string | null
        activity: string | null
        interests: string | null
        music: string | null
        movies: string | null
        TVShows: string | null
        books: string | null
        games: string | null
        quotes: string | null
        friends: number[]
        incomingFriendRequests: number[]
        outgoingFriendRequests: number[]
        grandparents: string[]
        parents: string[]
        siblings: string[]
        children: string[]
        grandsons: string[]
        updatedAt: string
        createdAt: string
    }
}
