import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
  <Router history={Route}>
    <Route path='/todos' component={Todo} />
    <Route path='/about' component={About} />
  </Router>
)
