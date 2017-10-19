import React, {Component} from 'react'

import Fieldset from 'components/Fieldset'
import ConfigInput from 'components/ConfigInput'

import classes from './styles.scss'

class ABtests extends Component {

  render() {
    return (
      <div className={classes.container}>
        <h2>AB test editing panel</h2>
        <Fieldset name="Basics">
          <ConfigInput name="layoutCaptions" text="Show layout captions" />
        </Fieldset>
        <Fieldset name="Store">
          <ConfigInput name="savings" text="Show savings" />
          <ConfigInput name="callToAction" text="Show 'Call to action' button" />
        </Fieldset>
      </div>
    )
  }
}

export default ABtests
