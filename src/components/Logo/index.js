import React, {Component} from 'react'
import {connect} from 'react-redux'

@connect (
  state => ({
    locale: state.i18nState.lang
  })
)
class Logo extends Component {
    render() {
      let { locale } = this.props

      return <img src={`/img/logo_${locale}.svg`} alt="logo" />
    }
}

export default Logo
