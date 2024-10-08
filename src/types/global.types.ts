import type { CSSProperties } from 'react'

export type Styles = Record<string, CSSProperties> | ((value?: any) => Record<string, CSSProperties>)
