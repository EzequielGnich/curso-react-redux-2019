import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Todo from '../todo/todo'
import About from '../about/about'
import Menu from '../template/menu'

export default props => (
  <div className='container'>
    <Menu />
    <Todo />
    <About />
  </div>
)
