import React, {Component} from 'react'
import {connect} from 'react-redux'

import classes from './styles.scss'

class Block extends Component {

  render() {
    return (
      <fieldset className={classes.block}>
        <p className={classes.caption}>
          {this.props.name}
        </p>
        {this.props.children}
      </fieldset>
    )
  }
}

export default Block
