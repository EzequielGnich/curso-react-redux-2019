import React from 'react'
import {
  HashRouter,
  Route,
  Redirect
} from 'react-router-dom'

import Grid from '../template/grid'
import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
  <HashRouter>
    <Grid cols='12 9 10'>
      <Route path='/todos' component={Todo} />
      <Route path='/about' component={About} />
      <Redirect from='*' to='/todos' />
    </Grid>
  </HashRouter>
)
