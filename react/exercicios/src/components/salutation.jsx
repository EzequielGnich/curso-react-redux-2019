import React, { Component } from 'react';

export default class Translation extends Component {

  constructor(props) {
    super(props)
    this.setType = this.setType.bind(this)
    this.setName = this.setName.bind(this)
    /*
      O estado tambem pode ser inicializado dentro do construtor
      state = {
        type: this.props.type,
        name: this.props.name
      }
    */
    
  }
  /* Estado inicializado fora do construtor */
  state = {
    type: this.props.type,
    name: this.props.name
  }
  setType(e) {
    this.setState({ type: e.target.value })
  }
  setName(e) {
    this.setState({ name: e.target.value })
  }

  render() {
    const { type, name } = this.state
    return (
      <>
        <h1>{type} {name}</h1>
        <hr/>
        <input type='text' placeholder="Tipo..." value={type} onChange={this.setType} />
        <input type='text' placeholder="Nome..." value={name} onChange={this.setName}/>

        {/*
          Utilizado quando não é chamado o construtor, para fazer a referencia
          do this utilizando o bind
          <input type='text' placeholder="Tipo..." value={type} onChange={ e => this.setType(e) } />
          <input type='text' placeholder="Nome..." value={name} onChange={ e => this.setName(e) }/>
        */}
      </>
    )
  }
}
