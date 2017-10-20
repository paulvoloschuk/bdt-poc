import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'

import store, { history } from './store'
import Application from './containers/Application'
import registerServiceWorker from './registerServiceWorker'
import translations from './translations'
import detectLocale from 'browser-locale'
import I18n from 'redux-i18n'

export const currentLocale = detectLocale().replace('-', '_')
const renderTarget = document.getElementById('application')

ReactDOM.render (
  <Provider store={store}>
    <I18n translations={translations} initialLang={currentLocale} fallbackLang="en_US">
      <Router history={history}>
        <Application />
      </Router>
    </I18n>
  </Provider>,
  renderTarget
)

registerServiceWorker()
