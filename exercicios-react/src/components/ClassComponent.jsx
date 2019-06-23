import React, { Component } from 'react'

export default class ClassComponent extends Component {
  render() {
    return (
      <h1>{this.props.valor || 'Padrão'}</h1>
    )
  }
}