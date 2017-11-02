import React from 'react'

import classes from './styles.scss'

function Block(props) {
  return (
    <fieldset className={classes.block}>
      <p className={classes.caption}>
        {props.name}
      </p>
      {props.children}
    </fieldset>
  )
}

export default Block
