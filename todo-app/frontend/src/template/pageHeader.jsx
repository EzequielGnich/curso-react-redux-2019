import React from 'react'

export default props => (
  <header className='border-bottom border-dark'>
    <h3>{props.name} <small className='text-muted'> {props.small}</small></h3>
  </header>
)
