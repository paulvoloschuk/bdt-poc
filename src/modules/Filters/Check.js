import React from 'react'

import classes from './styles.scss'

function Check (props) {
  return (
    <label className={classes.checkInput}>
      <input type="checkbox" name={props.id} />
      <span className={classes.indicator}/>
      <span className={classes.title}>{props.title}</span>
    </label>
  )
}

export default Check
