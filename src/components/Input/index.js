import React, {Component} from 'react'

class Input extends Component {
  ender() {
    return (
      <label>
        <input {...this.props} />
        {this.props.text}
      </label>
    )
  }
}

export default Input
