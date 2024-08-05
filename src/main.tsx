import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { GlobalStyles } from './styles/global.ts'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
)
