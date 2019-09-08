import React from 'react'

// retornando apenas um elemento recebendo props
export default function componentWithProps(props) {
  return (
      <h1>Bom dia {props.name}</h1>
  )
}

// Retornando dois ou mais elementos em forma de array, cada elemento precisará
// ter uma key(chave unica) para o React poder fazer a identificação de cada
// elemento dentro do array
// export default function componentWithProps(props) {
//   return [
//       <h1 key="h1">Bom dia {props.name}</h1>,
//       <h2 key="h2">Até Breve</h2>
//   ]
// }

// Envolvendo dois ou mais elementos utilizando o fragment do React
// As duas formas abaixo funcionam para utilziar o fragment, evitando as quebras 
// de layout por utilizar <div> para envolver masi elementos de uma vez
// export default function componentWithProps(props) {
//   return (
//     <>
//       <h1>Bom dia {props.name}</h1>
//     </>
//   )
// }
// Envolvendo dois ou mais elementos utilizando o fragment do React
// export default function componentWithProps(props) {
//   return (
//     <React.Fragment>
//       <h1>Bom dia {props.name}</h1>
//     <React.Fragment/>
//   )
// }
