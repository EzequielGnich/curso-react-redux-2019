import React, { Component } from 'react'

export default class Counter extends Component {
  sumOne() {
    this.props.numero++
  }
  minusOne() {
    this.props.numero--
  }

  render() {
    return (
      <div>
        <div>Número: {this.props.number}</div>
        <button onClick={this.sumOne}>Inc</button>
        <button onClick={this.minusOne}>Dec</button>
      </div>
    )
  }
}