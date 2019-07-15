import React from 'react'
import If from './if'

export default props => (
  <If test={!props.hide}>
    <button className={'btn btn-' + props.style} onClick={props.onclick}>
      <i className={'fa fa-' + props.icon} />
    </button>
  </If>
)
