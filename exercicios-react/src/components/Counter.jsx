import React, { Component } from 'react'

export default class Counter extends Component {

  sumOne = () => {
    this.props.numero++
    console.log(this)
  }
  minusOne = () => {
    this.props.numero--
    console.log(this)
  }

  render() {
    return (
      <div>
        <div>Número: {this.props.numero}</div>
        <button onClick={() => this.sumOne()}>Inc</button>
        <button onClick={() => this.minusOne()}>Dec</button>
      </div>
    )
  }
}

//*****************************************************************//
//************** Solução utilizando Função Bind *******************//
// Solução 01
// constructor(props) {
//  super(props)
//  this.sumOne = this.sumOne.bind(this)
//  this.minusOne = this.minusOne.bind(this)
//  }

//*****************************************************************//
//***** Solução utilizando Arrow Function no evento onClick *******//
//  Solução 2 para this
//  <button onClick={() => this.sumOne()}>Inc</button>
//  <button onClick={() => this.minusOne()}>Dec</button>

//*****************************************************************//
//************ Solução utilizando Arrow Function ******************//
//  sumOne = () => {
//  this.props.numero++
//  console.log(this)
//  }
//  minusOne = () => {
//  this.props.numero--
//  console.log(this)
//  }