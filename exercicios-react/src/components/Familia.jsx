import React from 'react'

export default props =>
  <div>
    <h1>Família {props.sobrenome}</h1>
    
    { React.cloneElement(props.children, { ...props }) }
    
    {/* React.cloneElement(props.children, props ) */}

    {/* React.cloneElement(props.children, {
      sobrenome: props.sobrenome
    }) */}
    
    {/*props.children*/}
  </div>