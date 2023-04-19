import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme'
import GlobalStyle from '../src/styles/global'

import { Perfil } from './pages/Perfil'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Perfil/>
    </ThemeProvider>
  </React.StrictMode>
)
