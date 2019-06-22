import React from 'react'
import ReactDOM from 'react-dom'

// import PrimeiroComponente from './components/PrimeiroComponent'
import { CompA, CompB as B } from './components/DoisComponentes'

// import MultiElementos from './components/MultiElementos'

const elemento = document.getElementById('root')

ReactDOM.render(
  <div>

    {/*<MultiElementos />*/}
    
    {/*<PrimeiroComponente valor="Bom dia!" valor2={2**4} /> */}
  
    {/*<CompA valor="Olá eu sou A!" />
    <B valor="Olá eu sou B!" />*/}
    
    <CompA valor="Olá eu sou A!" />
    <B valor="Olá eu sou B!" />


  </div>

, elemento)

// ReactDOM.render(jsx, elemento)