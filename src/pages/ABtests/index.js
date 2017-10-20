import React, {Component} from 'react'
import { Helmet } from 'react-helmet'
import Fieldset from 'components/Fieldset'
import ConfigInput from 'components/ConfigInput'

import classes from './styles.scss'

class ABtests extends Component {

  render() {
    return (
      <div className={classes.container}>
      <Helmet>
        <title>AB Tests</title>
      </Helmet>
        <h2>AB test editing panel</h2>
        <Fieldset name="Basics">
          <ConfigInput name="categoriesEverywhere" text="Show categories everywhere" />
        </Fieldset>
        <Fieldset name="Store">
          <ConfigInput name="savings" text="Show savings" />
          <ConfigInput name="callToAction" text="Show 'Call to action' button" />
          <ConfigInput name="fixedFilter" text="Make filter fixed" />
        </Fieldset>
      </div>
    )
  }
}

export default ABtests
