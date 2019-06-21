import React from 'react'

let isNice = true

export default (props) => 
  <div>
    <h1>{props.valor}</h1>
    <h1>{props.valor2}</h1>
    <h2>{1 + 1}</h2>
    <p>{Math.random()}</p>
    <p>{Math.pow(2, 8)}</p>
    <p>Legal? {isNice ? 'Sim' : 'Não' }</p>
  </div>

//export default () => 
//  <div>
//    <h1>Primeiro Componente! (Arrow Function)</h1>
//  </div>

//export default function() {
//  return <h1>Primeiro Componente!</h1>
//}

// function primeiro() {
  //return <h1>Primeiro Componente!</h1>
//}

//export default primeiro