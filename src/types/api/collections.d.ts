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
        updatedAt: string
        createdAt: string
    }
}
