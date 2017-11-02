import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import Fieldset from 'components/Fieldset'
import ConfigInput from 'components/ConfigInput'

import classes from './styles.scss'

class ABtests extends Component {

  render() {
    let {t} = this.context
    return (
      <div className={classes.container}>
      <Helmet>
        <title>{t('ab_tests')}</title>
      </Helmet>
        <h2>{t('ab_editingPanel')}</h2>
        <Fieldset name={t('basics')}>
          <ConfigInput name="categoriesEverywhere" text={t('ab_categories')} />
        </Fieldset>
        <Fieldset name={t('storepage')}>
          <ConfigInput name="savings" text={t('ab_savings')} />
          <ConfigInput name="callToAction" text={t('ab_callToAction')} />
          <ConfigInput name="fixedFilter" text={t('ab_fixedFilter')} />
        </Fieldset>
      </div>
    )
  }
}

ABtests.contextTypes = {
  t: PropTypes.func.isRequired
}

export default ABtests
