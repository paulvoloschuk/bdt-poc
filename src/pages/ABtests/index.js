import React, {Component} from 'react'
import {connect} from 'react-redux'

import classes from './styles.scss'

@connect(
  state => ({
    data: state.abTests
  }),
  dispatch => ({
    updateState: values => dispatch({
      type: 'ABtests/CHANGE_VALUES',
      payload: values
    })
  })
)
class ABtests extends Component {

  render() {
    return (
      <div className={classes.container}>
        <h2>AB test editing panel</h2>

      </div>
    )
  }

  sendChanges() {
    let values = Array.from(this.refs.form)
      .reduce((result, input) => {
        let {tagName, type, name, value, checked} = input
        if (tagName === 'INPUT' && name) {
          if (type === 'checkbox') result[name] = checked
          else result[name] = value
        }
        return result
      }, {})

      this.props.updateState(values)
  }
}

export default ABtests
