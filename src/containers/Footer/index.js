import React from 'react'
import Wrapper from 'components/Wrapper'
import LocaleSwitcher from 'components/LocaleSwitcher'
import classes from './styles.scss'

function Footer (props) {
  return (
    <footer className={classes.container}>
      <Wrapper className={classes.wrapper}>
        ReactJS POC for <a href="//bestdeals.today">BestDeals.today</a>
        <LocaleSwitcher />
      </Wrapper>
    </footer>
  )
}

export default Footer
