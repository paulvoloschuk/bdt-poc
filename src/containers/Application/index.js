import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Header from 'containers/Header'
import Footer from 'containers/Footer'
import Wrapper from 'components/Wrapper'
import ABtest from 'pages/ABtests'
import Store from 'pages/Store'
import Home from 'pages/Home'
import classes from './styles.scss'

class App extends Component {
  render() {
    return (
      <div className={classes.container}>
        <Helmet>
          <meta charSet="utf-8" />
        </Helmet>
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
