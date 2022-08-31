import React from 'react'

import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import 'index.sass'

import { App } from './app/App'
import { store } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement)
root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
)
