import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme'
import GlobalStyle from '../src/styles/global'

import { Create } from './pages/Create'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Create/>
    </ThemeProvider>
  </React.StrictMode>
)
