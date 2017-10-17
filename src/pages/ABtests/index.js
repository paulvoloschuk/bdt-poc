import React, {Component} from 'react'
import {connect} from 'react-redux'

import Fieldset from 'components/Fieldset'
import ConfigInput from 'components/ConfigInput'

import classes from './styles.scss'

class ABtests extends Component {

  render() {
    return (
      <div className={classes.container}>
        <h2>AB test editing panel</h2>
        <Fieldset name="Basics">
          <ConfigInput name="show_layout_captions" text="Show layout captions" />
          <ConfigInput name="show_layout_captions" text="Show layout captions" />
        </Fieldset>
        <Fieldset name="test">
          asdasd
        </Fieldset>
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
