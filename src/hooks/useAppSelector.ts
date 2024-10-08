import { type TypedUseSelectorHook, useSelector } from 'react-redux'
import { type AppState } from '../store/configureStore.ts'

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
