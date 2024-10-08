import type { AppDispatch } from '../store/configureStore.ts'
import { useDispatch } from 'react-redux'

export const useAppDispatch: () => AppDispatch = () => useDispatch<AppDispatch>()
