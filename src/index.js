import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import { injectGlobal } from 'styled-components'
injectGlobal`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
`
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
