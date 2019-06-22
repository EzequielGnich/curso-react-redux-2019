import React from 'react'

const aprovados = ['Paula', 'Roberta', 'Gustavo', 'Julia']

export default props => {
  const ItensGenerate = itens => {
    return itens.map(item => <li>{item}</li>)
  }

  return (
    <ul>
      {ItensGenerate(aprovados)}
    </ul>
  )
}