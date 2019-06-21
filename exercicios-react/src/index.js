import React from 'react'
import ReactDOM from 'react-dom'

import PrimeiroComponente from './components/PrimeiroComponent'

const elemento = document.getElementById('root')

ReactDOM.render(
  <div>
    <PrimeiroComponente valor="Bom dia!" valor2={2**4}/>
  </div>
, elemento)

// ReactDOM.render(jsx, elemento)