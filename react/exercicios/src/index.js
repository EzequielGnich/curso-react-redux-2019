import React from 'react'
import ReactDOM from 'react-dom'

// import First from './components/first'
import ComponentWithProps from './components/componentWithProps'

const rootElement = <ComponentWithProps name="Ezequiel" />
ReactDOM.render(rootElement, document.getElementById('root'))