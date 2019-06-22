import React from 'react'

import { childrenWithProps } from '../utils/utilsComponents'

export default props =>
  <div>
    <h1>Família {props.sobrenome}</h1>

    { childrenWithProps(props) }
    
    {/* React.Children.map(props.children, cbChild => {
      return React.cloneElement(cbChild, { ...props })
    }) */}

    {/* React.cloneElement(props.children, { ...props }) */}
    
    {/* React.cloneElement(props.children, props ) */}

    {/* React.cloneElement(props.children, {
      sobrenome: props.sobrenome
    }) */}
    
    {/*props.children*/}
  </div>