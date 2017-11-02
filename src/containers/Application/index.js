import { connectContext as context } from 'connect-context'
import { withRouter } from 'react-router'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import Header from 'containers/Header'
import Footer from 'containers/Footer'
import Wrapper from 'components/Wrapper'
import BackToTop from 'components/BackToTop'
import ABtest from 'pages/ABtests'
import Store from 'pages/Store'
import Home from 'pages/Home'
import classes from './styles.scss'

@context({
  t: PropTypes.func.isRequired
})
@withRouter
@connect(
  state => ({
    locale: state.i18nState.lang
  })
)
class App extends Component {
  render() {
    let { t, locale } = this.props,
        { href: currentURL } = window.location
    return (
      <div className={classes.container}>
        <Helmet>
          <meta charSet="utf-8" />
          <meta property="og:site_name" content={locale + '.BestDeals.Today'} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={currentURL} />

          <meta name="description" content={t('description')} />
          <meta name="current-locale" content={locale}/>
          <meta name="current-currency" content={t('currency')}/>
        </Helmet>
        <BackToTop/>
        <Header />
        <main className={classes.content}>
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/ab" component={ABtest}/>
            <Route exact path="/store" component={Store}/>
          </Wrapper>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
