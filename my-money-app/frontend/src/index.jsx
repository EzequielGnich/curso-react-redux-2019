import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'

import App from './main/app'
import Reducers from './main/reducers'

const store = applyMiddleware(promise)(createStore)(Reducers)
const rootElement = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , rootElement)
