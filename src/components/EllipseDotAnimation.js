import _ from 'lodash'

import React from 'react'

const MIN_NUMBER_OF_DOTS = 0
const MAX_NUMBER_OF_DOTS = 3
const DOT_CHANGE_INTERVAL = 333

export class EllipseDotAnimation extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      numberOfDots: MAX_NUMBER_OF_DOTS,
      dotChangeIncrement: -1
    }
  }
  changeNumberOfDots () {
    let numberOfDots = this.state.numberOfDots + this.state.dotChangeIncrement
    let dotChangeIncrement = this.state.dotChangeIncrement

    if (numberOfDots === MAX_NUMBER_OF_DOTS) dotChangeIncrement = -1
    if (numberOfDots === MIN_NUMBER_OF_DOTS) dotChangeIncrement = 1

    this.setState({
      numberOfDots,
      dotChangeIncrement
    })
  }
  componentDidMount () {
    this.intervalId = setInterval(this.changeNumberOfDots.bind(this), DOT_CHANGE_INTERVAL)
  }
  componentWillUnmount () {
    clearInterval(this.intervalId)
  }
  render () {
    return (
      <span>
        {_.times(this.state.numberOfDots, (key) =>
          <span key={key}>.</span>
        )}
        {_.times(MAX_NUMBER_OF_DOTS - this.state.numberOfDots, (key) =>
          <span key={key}>&nbsp;</span>
        )}
      </span>
    )
  }
}

export default EllipseDotAnimation
