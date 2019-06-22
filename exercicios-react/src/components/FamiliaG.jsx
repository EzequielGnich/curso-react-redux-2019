import React from 'react'

import Membro from './Membro'

export default props =>
  <div>
    <Membro nome="Ezequiel" sobrenome={props.sobrenome}/>
    <Membro nome="João" sobrenome={props.sobrenome}/>
    <Membro nome="Carlos" sobrenome={props.sobrenome}/>
    <Membro nome="Larissa" sobrenome={props.sobrenome}/>
  </div>