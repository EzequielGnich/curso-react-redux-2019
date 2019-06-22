import React from 'react'
import ReactDOM from 'react-dom'

// import PrimeiroComponente from './components/PrimeiroComponent'
// import { CompA, CompB as B } from './components/DoisComponentes'
// import MultiElementos from './components/MultiElementos'
// import Familia from './components/FamiliaG'

import Familia from './components/Familia'
import Membro from './components/Membro'

const elemento = document.getElementById('root')

ReactDOM.render(
  <div>

    <Familia sobrenome="Gnich">
      <Membro nome="Ezequiel" sobrenome="Gnich" />
      <Membro nome="Olivie" sobrenome="Gnich" />
    </Familia>
    <Familia sobrenome="Albert">
      <Membro nome="Gabriela" sobrenome="Albert" />
      <Membro nome="Cristiano" sobrenome="Albert" />
    </Familia>

    {/*<Familia />*/}

    {/*<MultiElementos />*/}
    
    {/*<PrimeiroComponente valor="Bom dia!" valor2={2**4} /> */}
  
    {/*<CompA valor="Olá eu sou A!" />
    <B valor="Olá eu sou B!" />*/}
    
    {/*<CompA valor="Olá eu sou A!" />
    <B valor="Olá eu sou B!" />*/}


  </div>

, elemento)

// ReactDOM.render(jsx, elemento)