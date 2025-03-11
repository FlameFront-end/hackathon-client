import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import { Header, Footer } from '@/components'
import { theme } from '@/core/theme.ts'
import { antdTheme } from '@/core/antdTheme.ts'

import { App, ConfigProvider } from 'antd'

import RouterProvider from './router/RouterProvider'

import 'dayjs/locale/ru.js'

import 'antd/dist/reset.css'
import 'react-toastify/dist/ReactToastify.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import './assets'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
    <>
        <Header />
        <ThemeProvider theme={theme}>
            <ConfigProvider theme={antdTheme}>
                <App>
                    <ToastContainer autoClose={2000} theme='dark'/>
                    <RouterProvider />
                </App>
            </ConfigProvider>
        </ThemeProvider>
        <Footer />
    </>
)
