import React, { Suspense } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './i18n' // language module i18next

import { App } from './App'

const RootElement = document.getElementById('root')

render(
  <Suspense fallback="loading...">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>,
  RootElement
)