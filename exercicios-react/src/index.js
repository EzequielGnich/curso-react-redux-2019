import React from 'react'
import ReactDOM from 'react-dom'

// import PrimeiroComponente from './components/PrimeiroComponent'
// import { CompA, CompB as B } from './components/DoisComponentes'
// import MultiElementos from './components/MultiElementos'
// import FamiliaG from './components/FamiliaG'
// import Familia from './components/Familia'
// import Membro from './components/Membro'
// import ComponentWithFunction from './components/ComponentWithFunction'
// import Father from './components/Father'
// import ClassComponent from './components/ClassComponent'
import Counter from './components/Counter'


const elemento = document.getElementById('root')

ReactDOM.render(
  <div>

    <Counter />

    {/*<ClassComponent valor='Olá Mundo'/>*/}

    {/*<Father />*/}

    {/*<ComponentWithFunction />*/}

    {/*<Familia sobrenome="Gnich">
      <Membro nome="Ezequiel" />
      <Membro nome="Olivie" sobrenome="Gnich" />
    </Familia>*/}

    {/*<Familia sobrenome="Albert">
      <Membro nome="Gabriela" sobrenome="Albert" />
      <Membro nome="Cristiano" sobrenome="Albert" />
    </Familia>*/}

    {/*<FamiliaG sobrenome="Gnich"/>*/}

    {/*<MultiElementos />*/}
    
    {/*<PrimeiroComponente valor="Bom dia!" valor2={2**4} /> */}
  
    {/*<CompA valor="Olá eu sou A!" />
    <B valor="Olá eu sou B!" />*/}
    
    {/*<CompA valor="Olá eu sou A!" />
    <B valor="Olá eu sou B!" />*/}


  </div>

, elemento)

// ReactDOM.render(jsx, elemento)