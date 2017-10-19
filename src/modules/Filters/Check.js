import React, {Component} from 'react'
import {connect} from 'react-redux'

import classes from './styles.scss'

class Check extends Component {

  render() {
    return (
      <label className={classes.checkInput}>
        <input type="checkbox" name={this.props.id} />
        <span className={classes.indicator}/>
        <span className={classes.title}>{this.props.title}</span>
      </label>
    )
  }
}

export default Check
