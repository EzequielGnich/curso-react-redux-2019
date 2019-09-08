import React from 'react'

import { childrenWithProps } from '../utils/utils'

// import Child from './child'

export default props => (
  <>
    <h1>{props.name} {props.lastname}</h1>
    <h2>Filhos</h2>
    <ul>
      {/* {props.children} */}
      
      { childrenWithProps(props) }

      {/* <Child name="Augusto" lastname={props.lastname} />
      <Child {...props} />
      <Child {...props} name="Joaquina" /> */}
    </ul>
  </>
)
