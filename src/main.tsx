import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { App, ConfigProvider } from 'antd'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import RouterProvider from './router/RouterProvider'
import { store } from './store/configureStore.ts'
import { theme } from './core/theme.ts'
import { antdTheme } from './core/antdTheme.ts'

import './assets/css/reset.css'
import 'antd/dist/reset.css'
import 'react-toastify/dist/ReactToastify.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import './assets/css/scrollbar.css'
import './assets/css/global.css'

import 'dayjs/locale/ru.js'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <ConfigProvider theme={antdTheme}>
                <App>
                    <ToastContainer autoClose={2000} theme='dark'/>
                    <RouterProvider />
                </App>
            </ConfigProvider>
        </ThemeProvider>
    </Provider>
)
