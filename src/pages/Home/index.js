import { connectContext as context } from 'connect-context'
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'


@context({
  t: PropTypes.func.isRequired
})
class Home extends Component {

  render() {
    let { t } = this.props
    return (
      <div>
        <Helmet>
          <title>{t('title_homepage')}</title>
          <meta property="og:title" content={t('title_homepage')} />
        </Helmet>
        <h1>Welcome!</h1>
        <h2>to BestDealsToday POC</h2>
      </div>
    )
  }
}

export default Home
