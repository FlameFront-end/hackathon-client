export interface LoginPayload {
    email: string
    password: string
}

export interface LoginResponse {
    token: string
    id: number
    email: string
    nick: string
}
