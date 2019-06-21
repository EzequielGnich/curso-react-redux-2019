import React from 'react'
import ReactDOM from 'react-dom'

import PrimeiroComponente from './components/PrimeiroComponent'

const elemento = document.getElementById('root')

ReactDOM.render(
  <div>
    <PrimeiroComponente></PrimeiroComponente>
  </div>
, elemento)

// ReactDOM.render(jsx, elemento)