import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { i18nState } from 'redux-i18n'

import dealsReducer from './deals'
import filterReducer from './filter'
import abTestsReducer from './ABtests'

export default combineReducers({
  deals: dealsReducer,
  router: routerReducer,
  filter: filterReducer,
  abTests: abTestsReducer,
  i18nState
})
