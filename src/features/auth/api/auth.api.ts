import { api } from '@/core/api.ts'
import { type RegisterPayload } from '../types/register.types.ts'

export const authApi = api.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: (payload) => ({
                url: '/auth/login',
                method: 'POST',
                body: payload
            })
        }),
        register: builder.mutation<Promise<void>, RegisterPayload>({
            query: (payload) => ({
                url: '/user/register',
                method: 'POST',
                body: payload
            })
        }),
        getProfile: builder.query<Collections.User, null>({
            query: () => ({
                url: '/auth/profile'
            })
        }),
        validateToken: builder.query<Promise<void>, string>({
            query: (token) => ({
                url: `/user/validate-token/${token}`
            })
        })
    })
})

export const {
    useLoginMutation,
    useRegisterMutation,
    useValidateTokenQuery,
    useGetProfileQuery
} = authApi
