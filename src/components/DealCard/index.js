import { connectContext as context } from 'connect-context'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classes from './styles.scss'
import {combineClasses as combine} from 'index/helpers'

@context({
  t: PropTypes.func.isRequired
})
@connect(
  state => ({
    ab: state.abTests
  })
)
class DealCard extends Component {

  render() {
    let { title, price, imageUrl, description, t, ab } = this.props

    return (
      <div className={classes.item}>
        <div className={classes.background}>
          <img className={classes.image} src={imageUrl} alt={description}/>
          <p className={classes.title}>{title}</p>
          <div className={classes.divider}/>
          <p className={classes.price}>{t('currency') + price}</p>
          {!ab.callToAction && <p className={classes.callToAction}>{t('callToAction')}</p>}
        </div>
      </div>
    )
  }
}

export default DealCard
