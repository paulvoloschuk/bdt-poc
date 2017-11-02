import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Wrapper from 'components/Wrapper'
import LocaleSwitcher from 'components/LocaleSwitcher'
import classes from './styles.scss'

class Footer extends Component {
  render() {
    let { t } = this.context
    return (
      <footer className={classes.container}>
        <Wrapper className={classes.wrapper}>
          ReactJS {t('copyright')} <a href="//bestdeals.today">BestDeals.today</a>
          <LocaleSwitcher />
        </Wrapper>
      </footer>
    )
  }
}

Footer.contextTypes = {
  t: PropTypes.func.isRequired
}

export default Footer
