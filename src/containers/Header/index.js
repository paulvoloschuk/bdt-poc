import React from 'react'
import {Link} from 'react-router-dom'
import Wrapper from 'components/Wrapper'
import Navigation from 'components/Navigation'
import Categories from 'containers/Categories'
import classes from './styles.scss'


function Header (props) {
  return (
    <header className={classes.container}>
      <Wrapper className={classes.wrapper}>
        <Link to="/" className={classes.logo}>
          <img src="/img/logo_us.svg" alt="logo" />
        </Link>
        <Navigation>
          <Link to="/" >
            Homepage
          </Link>
          <Link to="/store">
            Storepage
          </Link>
          <Link to="/ab">
            AB tests
          </Link>
        </Navigation>
      </Wrapper>
      <Categories />
    </header>
  )
}

export default Header
