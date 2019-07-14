import React from 'react'

export default props => (
  <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
    <div className='container'>
      <div className='navbar-header'>
        <a className='navbar-brand' href='#'>
          <i className='fa fa-calendar-check-o'>Todo App</i>
        </a>
      </div>
      <div id='navbar' className='collapse navbar-collapse'>
        <ul className='navbar-nav mr-auto mt-5 mt-lg-0'>
          <li className='nav-item'><a className='nav-link' href='#/todos'>Tarefas</a></li>
          <li className='nav-item'><a className='nav-link' href='#/about'>Sobre</a></li>
        </ul>
      </div>
    </div>
  </nav>
)
