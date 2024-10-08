import styled from 'styled-components'
import { App, Layout } from 'antd'

export const StyledLayout = styled(Layout)`
    min-height: calc(100vh - 50px);
    max-width: calc(920px + 200px + 50px);
    display: flex;
    gap: 16px;
    background-color: #141414;
    margin: 0 auto;
    padding-bottom: 16px;
`

export const StyledApp = styled(App)`
    input {
        color: ${({ theme }) => theme.text} !important;
        background-color: ${({ theme }) => theme.card.background} !important;
        caret-color: ${({ theme }) => theme.text} !important;
    }

    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px ${({ theme }) => theme.card.background} inset !important;
        -webkit-text-fill-color: ${({ theme }) => theme.text} !important;
        caret-color: ${({ theme }) => theme.text} !important;
    }

    input:-webkit-autofill:focus {
        -webkit-box-shadow: 0 0 0 1000px ${({ theme }) => theme.card.background} inset !important;
        -webkit-text-fill-color: ${({ theme }) => theme.text} !important;
        caret-color: ${({ theme }) => theme.text} !important;
    }

    input:-webkit-autofill:hover {
        -webkit-box-shadow: 0 0 0 1000px ${({ theme }) => theme.card.background} inset !important;
        -webkit-text-fill-color: ${({ theme }) => theme.text} !important;
        caret-color: ${({ theme }) => theme.text} !important;
    }
`

export const StyledContent = styled(Layout.Content)`
    margin: 16px 16px 0;
    background-color: #141414;
`
