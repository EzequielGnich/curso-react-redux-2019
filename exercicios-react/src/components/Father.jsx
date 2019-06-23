import React from 'react'
import Child from './Child'

export default props => {
  const notificarSaida = lugar => alert(`Liberado para ${lugar}`)
  return (
    <div>
      <Child notificarSaida={notificarSaida} />
    </div>
  )
}