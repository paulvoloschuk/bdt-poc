import React from 'react'

import classes from './styles.scss'

function Fieldset(props) {

    return (
      <fieldset className={classes.container}>
        {props.name ? <p className={classes.caption}>{props.name}</p> : null}
        {props.children}
      </fieldset>
    )
}

export default Fieldset
