import React from 'react'
import './Button.css'

export default props => {
  let buttonClass = 'button '
    buttonClass += props.operation ? 'operation' : ''
    buttonClass += props.double ? 'double' : ''
    buttonClass += props.triple ? 'triple' : ''

  return (
    <button 
      onClick = { e => props.click && props.click(props.label) }
      className={buttonClass}>
      {props.label}
    </button>
  )
}








  