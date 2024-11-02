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
        updateProfile: builder.mutation<Promise<void>, RegisterPayload>({
            query: (payload) => ({
                url: '/user/update',
                method: 'PATCH',
                body: payload
            })
        }),
        getProfile: builder.query<Collections.User, null>({
            query: () => ({
                url: '/auth/profile'
            })
        })
    })
})

export const {
    useLoginMutation,
    useRegisterMutation,
    useGetProfileQuery,
    useUpdateProfileMutation
} = authApi
