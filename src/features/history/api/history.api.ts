import { api } from '@/core/api.ts'

export const historyApi = api.injectEndpoints({
    endpoints: builder => ({
        createHistory: builder.mutation({
            query: (payload) => ({
                url: '/history',
                method: 'POST',
                body: payload
            })
        }),
        getHistoryByUserId: builder.query<Collections.History[], number>({
            query: (id) => ({
                url: `/history/user/${id}`
            })
        }),
        getAllHistory: builder.query<Collections.History[], null>({
            query: () => ({
                url: '/history'
            })
        })
    })
})

export const {
    useCreateHistoryMutation,
    useGetHistoryByUserIdQuery,
    useGetAllHistoryQuery
} = historyApi
