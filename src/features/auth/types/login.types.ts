export interface LoginPayload {
    email: string
    password: string
}

export interface LoginResponse {
    token: string
    id: number
    ava: string
    name: string
    surname: string
    patronymic: string | null
}
