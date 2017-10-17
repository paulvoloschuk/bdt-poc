import React, {Component} from 'react'
import {connect} from 'react-redux'
import classes from './styles.scss'

@connect (
  state => state.router.location,
  null
)
class Navigation extends Component {
  render() {
    return (
      <ul className={classes.container}>
        {this.props.children.map((item, index) => {
          let activeModifier = (item.props.to === this.props.pathname) ? classes.item__active : '';
          return (
            <li key={index} className={classes.item + ' ' + activeModifier}>
              {item}
            </li>
          )
        })}
      </ul>
    )
  }
}

export default Navigation
