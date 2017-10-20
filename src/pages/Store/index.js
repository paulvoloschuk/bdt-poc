import React from 'react'
import { Helmet } from 'react-helmet'
import Filters from 'modules/Filters'
import Deals from 'containers/Deals'

import classes from './styles.scss'

function Store () {

  return (
    <div className={classes.container}>
      <Helmet>
        <title>Storepage</title>
      </Helmet>
      <Filters />
      <div>
        <Deals />
      </div>
    </div>
  )
}

export default Store
