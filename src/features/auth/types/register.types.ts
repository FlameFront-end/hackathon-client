import type dayjs from 'dayjs'

export interface RegisterPayload {
    email: string
    password: string
    surname: string
    name: string
    patronymic: string
    birthdate: string
    ava: any
}

export interface RegisterDataForm {
    email: string
    password: string
    surname: string
    name: string
    patronymic: string
    birthdate: dayjs.Dayjs
    ava: any
}
