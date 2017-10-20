import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import translates from 'index/translations'
import { setLanguage } from 'redux-i18n'
import classes from './styles.scss'
import { combineClasses as combine } from 'index/helpers'

const locales = Object.keys(translates)


@connect(
  state => ({
    currentLang: state.i18nState.lang
  }),
  dispath => ({
    changeLocale: locale => dispath(setLanguage(locale))
  })
)
class LocaleSwitcher extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }

    // Bind Hack
    this.clickHandler = this.clickHandler.bind(this)
  }
  render() {
    console.log(this.state);
    let {open} = this.state,
        {currentLang} = this.props,
        containerStateClass = open ? classes.languageList__open : null,
        localeList = locales
          .sort((a, b) => (a == currentLang) ? 1 : -1)
          .map((item, index) => {
            let itemStateClass = (item == currentLang || open) ? classes.languageList__item__shown : null
            return (
              <li
                className={combine(classes.languageList__item, itemStateClass)}
                onClick={this.clickHandler(item)}
                key={index}
              >
                {item}
              </li>
            )
          })
    return (
      <div className={classes.container}>
        <ul className={combine(classes.languageList, containerStateClass)}>
          {localeList}
        </ul>
      </div>
    )
  }
  clickHandler(localState) {
    return event => {
      console.log(localState);
      if (!this.state.open) {
        this.setState({open: true})
      }
      else {
        this.props.changeLocale(localState)
        this.setState({open: false})
      }
    }
  }
}

export default LocaleSwitcher
