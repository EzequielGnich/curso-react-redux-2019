import React from 'react';

export default function() {
  return <h1>Primeiro</h1>
}

// Exportando o componente com uma arrow function com un corpo
// export default () => {
//   return <h1>Primeiro</h1>
// }

// Exportando o mesmo componente com arrow function, mas agora sem 
// corpo (obrigatóriamente deve ser removido o return)
// export default () => <h1>Primeiro</h1>

// Exportando o mesmo componente com arrow function, mas agora com o componente
// dentro de uma expressão
// export default () => (
//    <h1>Primeiro</h1>
// )