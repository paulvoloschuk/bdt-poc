import React from 'react'

import Filters from 'modules/Filters'

import classes from './styles.scss'

function Store () {

  return (
    <div className={classes.container}>
      <Filters />
      <div>List</div>
    </div>
  )
}

export default Store
