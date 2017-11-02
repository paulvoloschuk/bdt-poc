import { connectContext as context } from 'connect-context'
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import Filters from 'modules/Filters'
import Deals from 'containers/Deals'

import classes from './styles.scss'

@context({
  t: PropTypes.func.isRequired
})
class Store extends Component {

  render() {
    let { t } = this.props
    return (
      <div className={classes.container}>
        <Helmet>
          <title>{t('storepage')}</title>
        </Helmet>
        <Filters />
        <div>
          <Deals />
        </div>
      </div>
    )
  }
}

export default Store
