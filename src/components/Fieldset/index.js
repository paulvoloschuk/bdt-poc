import React, {Component} from 'react'
import {connect} from 'react-redux'

@connect(
  state => ({
    data: state.abTests
  }),
  null
)
class Fieldset extends Component {
  render() {
    let caption = this.props.name ? <p>{this.props.name}</p> : null,
        children = React.Children.map(this.props.children, child => {
          let key = ,
              value =
          child.props[key] = value
          return child
        })
    return (
      <fieldset>
        {caption}
        {children}
      </fieldset>
    )
  }
}

export default Fieldset
