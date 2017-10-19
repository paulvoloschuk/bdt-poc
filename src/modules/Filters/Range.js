import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import classes from './styles.scss'

class Range extends Component {
  constructor(props) {
    super(props)
    this.state = {
      min: 10,
      max: 100,
      input: {
        min: props.min,
        max: props.max
      },
      mousePress: false,
    }

    // Bind Hack
    this.dragEnd = this.dragEnd.bind(this)
    this.dragHandler = this.dragHandler.bind(this)
    this.getNumberFromPercent = this.getNumberFromPercent.bind(this)
  }
  componentDidMount() {
    document.addEventListener('mouseup', this.dragEnd, true)
    document.addEventListener('mousemove', this.dragHandler, true)
  }
  componentWillUnmount() {
    document.removeEventListener('mouseup', this.dragEnd, true)
    document.removeEventListener('mousemove', this.dragHandler, true)
  }
  render() {
    let {props, state, getNumberFromPercent} = this,
        minContent = getNumberFromPercent(state.min) + ' $',
        maxContent = getNumberFromPercent(state.max) + ' $'

    return (
      <div className={classes.rangeInput} ref="container">
        <input type="hidden" name={'min-' + props.id} value={state.input.min}/>
        <input type="hidden" name={'max-' + props.id} value={state.input.max}/>
        <span className={classes.valueMin}>{minContent}</span>
        <span className={classes.valueMax}>{maxContent}</span>
        <div className={classes.line} style={{left: state.min  + '%', right: (100 - state.max)  + '%'}}/>
        <div
          className={classes.limiter}
          style={{left: state.min + '%', transform: `translate(-${state.min}%,-50%)`}}
          onMouseDown={this.dragStart('min').bind(this)}
        />
        <div
          className={classes.limiter}
          style={{left: state.max + '%', transform: `translate(-${state.max}%,-50%)`}}
          onMouseDown={this.dragStart('max').bind(this)}
        />
      </div>
    )
  }
  getNumberFromPercent(percent) {
    let {max, min} = this.props
    return (percent / 100 * (max - min) + min).toFixed()
  }
  dragStart(mode) {
    return event => {
      this.setState({
        ...this.state,
        mousePress: {
          start: event.clientX,
          mode: mode
        },
        currentPercentage: this.state[mode]
      })
    }
  }
  dragEnd(event) {
    this.setState({
      ...this.state,
      mousePress: false,
      input: {
        min: this.getNumberFromPercent(this.state.min),
        max: this.getNumberFromPercent(this.state.max)
      }
    })
  }
  dragHandler(event) {
    let {state, props, refs} = this

    if (state.mousePress) {
      let cordinatesDifference = event.clientX - state.mousePress.start,
          percentageDifference = cordinatesDifference / refs.container.clientWidth * 100,
          currentPercentage = percentageDifference + state.currentPercentage,
          injection = {}

      if(currentPercentage < 0) currentPercentage = 0
      else if(currentPercentage > 100) currentPercentage = 100


      injection[state.mousePress.mode] = currentPercentage

      this.setState({
        ...state,
        ...injection
      })
    }
  }
}

// Validation
Range.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  minInterval: PropTypes.number
}

export default Range
