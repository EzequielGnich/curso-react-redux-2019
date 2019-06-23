import React, { Component } from 'react'

export default class Counter extends Component {

  state = {
    numero: 0
  }

  sumOne = () => {
    // this.state.numero++
    
    this.setState({ numero: this.state.numero + 1 })
  }
  minusOne = () => {
    this.setState({ numero: this.state.numero - 1 })
  }
  changeNumber = difference => {
    this.setState({ numero: this.state.numero + difference })
  }

  render() {
    return (
      <div>
        <div>Número: {this.state.numero}</div>

        <button onClick={() => this.sumOne()}>Inc</button>
        <button onClick={() => this.minusOne()}>Dec</button>
        <br />
        <button onClick={() => this.changeNumber(10)}>Inc 10</button>
        <button onClick={() => this.changeNumber(-10)}>Dec 10</button>
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