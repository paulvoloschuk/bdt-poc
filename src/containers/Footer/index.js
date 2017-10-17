import React from 'react'
import Wrapper from 'components/Wrapper'
import classes from './styles.scss'

function Footer (props) {
  return (
    <footer className={classes.container}>
      <Wrapper className={classes.wrapper}>
        ReactJS POC for <a href="//bestdeals.today">BestDeals.today</a>
      </Wrapper>
    </footer>
  )
}

export default Footer
