import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import classes from './styles.scss'

@connect (
  state => ({
    data: state.products || [],
  }),
  null
)
class Deals extends Component {
  render () {
      let {data} = this.props,
          products = data.map(item => item), // TODO: Make template for products
          noData = (
            <div className={classes.placeholder}>
              <img src="/img/no-data.svg" alt="FUUUUUU"/>
              <p>Oops! No deals found.</p>
            </div>
          )
    return (
      <div className={classes.container}>
        {products && noData}
      </div>
    )
  }
}

export default Deals
