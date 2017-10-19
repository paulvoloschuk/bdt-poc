import React from 'react'

import Filters from 'modules/Filters'
import Deals from 'containers/Deals'

import classes from './styles.scss'

function Store () {

  return (
    <div className={classes.container}>
      <Filters />
      <div>
        <Deals />
      </div>
    </div>
  )
}

export default Store
