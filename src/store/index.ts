import { api } from '../core/api.ts'
import { authActions, authReducer } from '../features/auth/store/auth.slice'

export const reducers = {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
}

export const actions = {
    ...authActions,
}
