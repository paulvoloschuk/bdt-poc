import { connectContext as context } from 'connect-context'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Block from './Block'
import Range from './Range'
import Check from './Check'
import LoaderBlocks from './LoaderBlocks'

import classes from './styles.scss'

@context({
  t: PropTypes.func.isRequired
})
@connect(
  state => ({
    data: state.filter
  })
)
class Filters extends Component {
  render() {
    let { t, data } = this.props,
        content = Object.keys(data).length - 1
          ? [
            <Block key={10} name={t('pricing')}>
              <Range min={data.availMin} max={data.availMax} minInterval={20} id="price"/>
            </Block>
          ] : <LoaderBlocks amount={3} />

    return (
      <form ref="dataContainer" className={classes.container} onChange={this.updateHandler.bind(this)}>
        <h3>
          {t('filter_by')}
        </h3>
        {content}
      </form>
    )
  }
  updateHandler() {
    console.log(this.refs.dataContainer);
  }
}

// <Block name={t('pricing')}>
//   <Range min={100} max={1000} minInterval={20} id="price"/>
// </Block>
// <Block name={t('store')}>
//   <Check title="Test label" id="asdasd"/>
// </Block>
// <Block name={t('condition')}>
//
// </Block>
// <Block name={t('brand')}>
//
// </Block>

export default Filters
