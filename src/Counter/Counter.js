import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      isCounterBelowZero: false
    }
  }

  incrementCounter = () => {
    return this.setState({
      ...this.state,
      counter: this.state.counter + 1,
    })
  }

  decrementCounter = () => {
    if (this.state.counter === 0) {
        return this.setState({
            ...this.state,
            isCounterBelowZero: true
        })
    }
    return this.setState({
        ...this.state,
        counter: this.state.counter - 1,
    })
  }

  render() {
    return (
      <div data-test="component-counter">
          {this.state.isBelowZero &&
          <span data-test="errorMsg">Counter cannot go below zero</span>
          }
        <p data-test="counter-display">{this.state.counter}</p>
        <button data-test="increment-button" onClick={this.incrementCounter}>
          Increment
        </button>
        <button 
            data-test="decrement-button" 
            onClick={this.decrementCounter}
            disabled={this.state.isBelowZero}>Decrement
        </button>
      </div>
    )
  }
}

export default Counter
