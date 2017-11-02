import React, { Component } from 'react'
import { connect } from 'react-redux'
import translates from 'index/translations'
import { setLanguage } from 'redux-i18n'
import classes from './styles.scss'
import { combineClasses as combine } from 'index/helpers'
import clickOutside from 'react-onclickoutside'

const locales = Object.keys(translates)


@connect(
  state => ({
    currentLang: state.i18nState.lang
  }),
  dispath => ({
    changeLocale: locale => dispath(setLanguage(locale))
  })
)
@clickOutside
class LocaleSwitcher extends Component {

  constructor() {
    super()
    this.state = {
      open: false
    }
    // Bind Hack
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    let {open} = this.state,
        {currentLang} = this.props,
        containerStateClass = open ? classes.languageList__open : null,
        localeList = locales
          .sort((a, b) => (a === currentLang) ? 1 : -1)
          .map((item, index) => (
            <li
              className={combine(classes.languageList__item, (item === currentLang || open) ? classes.languageList__item__shown : null)}
              onClick={this.handleClick(item)}
              key={index}
            >
              {item}
            </li>
          ))
    return (
      <div className={classes.container}>
        <ul className={combine(classes.languageList, containerStateClass)}>
          {localeList}
        </ul>
      </div>
    )
  }

  handleClickOutside() {
    if (this.state.open) this.setState({open: false})
  }

  handleClick = localState => event => {
    if (this.state.open) {
      this.props.changeLocale(localState)
      this.setState({open: false})
    } else this.setState({open: true})
  }

}

export default LocaleSwitcher
