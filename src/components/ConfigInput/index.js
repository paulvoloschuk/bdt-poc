import React, {Component} from 'react'
import {connect} from 'react-redux'

import classes from './styles.scss'

@connect(
  state => ({
    data: state.abTests
  }),
  dispatch => ({
    updateState: payload => dispatch({
      type: 'ABtests/CHANGE_VALUES',
      payload: payload
    })
  })
)
class ConfigInput extends Component {
  render() {
    let {data, name} = this.props,
        checked = !!data[name]
    return (
      <label className={classes.container}>
        <p className={classes.label}>{this.props.text}</p>
        <input type="checkbox" name={this.props.name} checked={checked} onClick={this.toggleHandler.bind(this)}/>
      </label>
    )
  }
  toggleHandler() {
    let {data, name} = this.props

    this.props.updateState({
      name: name,
      value: !data[name]
    })
  }
}

export default ConfigInput
