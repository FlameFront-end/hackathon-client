import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'

export const api = createApi({
    reducerPath: 'base',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://hackathon-server-nest-production.up.railway.app',
        prepareHeaders: (headers) => {
            const token = Cookies.get('token')
            if (token != null) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        }
    }),
    endpoints: (build) => ({
        fetchUsers: build.query({
            query: () => '/'
        })
    })
})
