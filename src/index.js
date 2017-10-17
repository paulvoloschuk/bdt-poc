import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'

import store, { history } from './store'
import Application from './containers/Application'
import registerServiceWorker from './registerServiceWorker'

const renderTarget = document.getElementById('application')

ReactDOM.render (
  <Provider store={store}>
    <Router history={history}>
      <Application />
    </Router>
  </Provider>,
  renderTarget
)

registerServiceWorker()
