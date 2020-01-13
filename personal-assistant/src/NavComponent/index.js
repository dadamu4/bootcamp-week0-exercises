import React from 'react'
import { NavBar } from './styles'
import { HomeButton } from './HomeSubComp/styles'
import { TodosButton } from './TodosSubComp/styles'


const NavComponent = () => (
  <div>
    <NavBar>
      <HomeButton>
        <li><a className="homeLink" href="https://google.com">Home</a></li>
      </HomeButton>

      <TodosButton>
        <li><a className="todosLink" href="https://google.com">Todos</a></li>
      </TodosButton>
    </NavBar>
  </div>
)

export default NavComponent
