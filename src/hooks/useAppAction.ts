import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actions } from '@/store'
import { type AppDispatch } from '../store/configureStore.ts'

export const useAppAction = (): any => {
    const dispatch = useDispatch<AppDispatch>()

    return useMemo(() => bindActionCreators(actions, dispatch), [])
}
