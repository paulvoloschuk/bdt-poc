import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Wrapper from 'components/Wrapper'
import Logo from 'components/Logo'
import Navigation from 'components/Navigation'
import Categories from 'containers/Categories'
import classes from './styles.scss'

class Header extends Component {
  render() {
    let {t} = this.context
    return (
      <header className={classes.container}>
        <Wrapper className={classes.wrapper}>
          <Link to="/" className={classes.logo}>
            <Logo />
          </Link>
          <Navigation>
            <Link to="/" >
              {t('homepage')}
            </Link>
            <Link to="/store">
              {t('storepage')}
            </Link>
            <Link to="/ab">
              {t('ab_tests')}
            </Link>
          </Navigation>
        </Wrapper>
        <Categories />
      </header>
    )
  }
}

Header.contextTypes = {
  t: PropTypes.func.isRequired
}

export default Header
