import React from 'react'

export function childrenWithProps(props) {
  return React.Children.map(props.children, childrenProps => {
    return React.cloneElement(childrenProps, { ...props })
  })
}