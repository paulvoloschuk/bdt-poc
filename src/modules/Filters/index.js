import React, {Component} from 'react'
import {connect} from 'react-redux'

import Block from './Block'
import Range from './Range'
import Check from './Check'

import classes from './styles.scss'

class Filters extends Component {
  render() {
    return (
      <form ref="dataContainer" className={classes.container} onChange={this.updateHandler.bind(this)}>
        <h3>
          Filter by
        </h3>
        <Block name="pricing">
          <Range min={100} max={1000} minInterval={20} id="price"/>
        </Block>
        <Block name="store">
          <Check title="Test label" id="asdasd"/>
        </Block>
        <Block name="condition">

        </Block>
        <Block name="brand">

        </Block>
      </form>
    )
  }
  updateHandler() {
    console.log(this.refs.dataContainer);
  }
}

export default Filters
