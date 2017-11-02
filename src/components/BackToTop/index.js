import { combineClasses as combine } from 'index/helpers'
import React, { Component } from 'react'
import { TweenLite } from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { Power2 } from 'gsap/src/uncompressed/easing/EasePack'
import classes from './styles.scss'

class BackToTop extends Component {
  constructor() {
    super()
    this.state = {hidden: true}
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.hidden !== this.state.hidden
  }
  componentDidMount() {
    this.scrollContainer = document.querySelector('html')
    document.addEventListener('scroll', event => {
      let { availHeight } = window.screen
      this.setState({
        hidden: (this.scrollContainer.scrollTop < availHeight * 0.5)
      })
    })
  }
  scrollHandler() {
    TweenLite.to(this.scrollContainer, 1, {scrollTo: 0, ease: Power2.easeOut});
  }
  render() {
    return <div className={combine(classes.button, this.state.hidden && classes.hidden)} onClick={this.scrollHandler.bind(this)}/>
  }
}

export default BackToTop
