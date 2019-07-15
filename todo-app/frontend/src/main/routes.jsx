import React from 'react'
import {
  HashRouter,
  Route,
  Redirect
} from 'react-router-dom'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
  <HashRouter>
    <div>
      <Route path='/todos' component={Todo} />
      <Route path='/about' component={About} />
      <Redirect from='*' to='/todos' />
    </div>
  </HashRouter>
)
